// Mensagens padronizadas dos links de WhatsApp do site.
// Tom cordial e objetivo, sem emojis: cada mensagem já identifica a loja
// e diz o que o cliente quer, para o vendedor abrir a conversa com o
// contexto pronto (produto, referência, quantidade, valor).
export const WHATSAPP_PHONE = '5511974659658'
const LOJA = 'BateForte Materiais para Construção'

// formatação de preço local (evita import circular com catalog.js)
const brl = (n) => n.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

export function waLink(msg) {
  return `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(msg)}`
}

// Interesse em um produto (card da vitrine e página de produto).
export function msgProduto({ nome, referencia, preco, qtd } = {}) {
  const linhas = [
    `Olá! Vim pelo site da ${LOJA} e tenho interesse neste produto:`,
    '',
    `Produto: ${nome}`,
  ]
  if (referencia) linhas.push(`Referência: ${referencia}`)
  if (qtd && qtd > 1) linhas.push(`Quantidade: ${qtd}`)
  if (preco != null) linhas.push(`Valor unitário: ${brl(preco)}`)
  linhas.push('', 'Ele está disponível? Gostaria de confirmar o valor e as condições de pagamento e entrega.')
  return linhas.join('\n')
}

// Busca sem resultado no catálogo online.
export function msgBusca(termo) {
  return [
    `Olá! Falo com a ${LOJA}?`,
    '',
    `Procurei por "${termo}" no site e não encontrei. Vocês têm esse item disponível?`,
  ].join('\n')
}

// Consulta de um departamento/categoria.
export function msgCategoria(categoria) {
  return [
    `Olá! Falo com a ${LOJA}?`,
    '',
    `Gostaria de conhecer as opções de ${categoria} que vocês têm disponíveis, com valores e condições de pagamento.`,
  ].join('\n')
}

// Cabeçalho do pedido finalizado no checkout.
export function msgPedidoIntro() {
  return `Olá! Acabei de finalizar um pedido pelo site da ${LOJA}.`
}
