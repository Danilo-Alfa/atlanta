/**
 * BateForte — registro de pedidos com recálculo anti-adulteração.
 *
 * COMO ATIVAR (na planilha do catálogo):
 * 1. Extensões → Apps Script → apague o conteúdo e cole este arquivo
 * 2. Ajuste os nomes das abas abaixo se forem diferentes
 * 3. Implantar → Nova implantação → tipo "App da web"
 *    - Executar como: você
 *    - Quem pode acessar: "Qualquer pessoa"
 * 4. Copie a URL gerada (termina em /exec) e envie para colar em
 *    src/config.js (PEDIDOS_URL)
 *
 * O que ele faz: recebe o pedido do site, grava na aba "Pedidos" e
 * RECALCULA subtotal/frete/total usando o catálogo e a aba Frete —
 * se o valor recalculado divergir do alegado pelo navegador, a linha
 * fica vermelha (possível adulteração no cliente).
 */
var ABA_CATALOGO = 'catalogobateforte'
var ABA_FRETE = 'Frete'
var ABA_PEDIDOS = 'Pedidos'
var FRETE_GRATIS_ACIMA = 100
var LOJA = { lat: -23.7169, lng: -46.8492 }

function doPost(e) {
  var pedido = JSON.parse(e.postData.contents)
  var ss = SpreadsheetApp.getActive()
  var aba = ss.getSheetByName(ABA_PEDIDOS) || ss.insertSheet(ABA_PEDIDOS)
  if (aba.getLastRow() === 0) {
    aba.appendRow(['data', 'numero', 'nome', 'whatsapp', 'cep', 'endereco', 'km', 'itens',
      'subtotal_recalculado', 'frete_recalculado', 'total_recalculado',
      'total_alegado_pelo_site', 'confere?'])
  }

  // recalcula o subtotal com os preços OFICIAIS do catálogo
  var precos = tabelaDePrecos(ss)
  var subtotal = 0
  var temSobConsulta = false
  var linhasItens = []
  pedido.itens.forEach(function (i) {
    var oficial = precos[normalizar(i.nome)]
    if (oficial != null) subtotal += oficial * i.qtd
    else temSobConsulta = true
    linhasItens.push(i.qtd + 'x ' + i.nome + (i.ref ? ' (Ref ' + i.ref + ')' : '') +
      (oficial != null ? ' @ R$' + oficial.toFixed(2) : ' [sob consulta]'))
  })

  // recalcula o frete pela aba Frete + distância
  var frete = null
  if (subtotal >= FRETE_GRATIS_ACIMA) frete = 0
  else if (pedido.km !== '' && pedido.km != null) frete = freteParaKm(ss, Number(pedido.km))

  var total = frete != null ? subtotal + frete : null
  var alegado = pedido.total_alegado
  var confere = (total == null && alegado == null) ||
    (total != null && alegado != null && Math.abs(total - alegado) < 0.01)

  aba.appendRow([new Date(), pedido.numero, pedido.nome, pedido.fone, pedido.cep,
    pedido.endereco, pedido.km, linhasItens.join('\n'),
    subtotal, frete != null ? frete : 'a combinar',
    total != null ? total : 'a combinar' + (temSobConsulta ? ' (+itens sob consulta)' : ''),
    alegado != null ? alegado : '-', confere ? 'OK' : 'DIVERGENTE'])

  if (!confere) {
    aba.getRange(aba.getLastRow(), 1, 1, 13).setBackground('#f8d7da')
  }
  return ContentService.createTextOutput('ok')
}

function tabelaDePrecos(ss) {
  var dados = ss.getSheetByName(ABA_CATALOGO).getDataRange().getValues()
  var header = dados[0].map(function (h) { return String(h).toLowerCase() })
  var iNome = header.indexOf('nome')
  var iPreco = header.indexOf('preco')
  var mapa = {}
  for (var r = 1; r < dados.length; r++) {
    var preco = parseFloat(String(dados[r][iPreco]).replace(',', '.'))
    if (dados[r][iNome] && !isNaN(preco)) mapa[normalizar(dados[r][iNome])] = preco
  }
  return mapa
}

function freteParaKm(ss, km) {
  var aba = ss.getSheetByName(ABA_FRETE)
  if (!aba || isNaN(km)) return null
  var dados = aba.getDataRange().getValues()
  var faixas = []
  for (var r = 1; r < dados.length; r++) {
    var ate = parseFloat(String(dados[r][0]).replace(',', '.'))
    var valor = parseFloat(String(dados[r][1]).replace(',', '.'))
    if (!isNaN(ate) && !isNaN(valor)) faixas.push({ km: ate, valor: valor })
  }
  faixas.sort(function (a, b) { return a.km - b.km })
  for (var f = 0; f < faixas.length; f++) {
    if (km <= faixas[f].km) return faixas[f].valor
  }
  return null // fora das faixas: a combinar
}

function normalizar(s) {
  return String(s).toLowerCase().replace(/\s+/g, ' ').trim()
}
