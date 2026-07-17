// Finalização de pedido (#/finalizar).
// O cliente revisa o carrinho, informa nome/WhatsApp/CEP e vê o frete
// (faixas de km na aba "Frete" da planilha) e o total. Ao enviar:
//   1) o PEDIDO BRUTO (itens+quantidades+CEP) é gravado na planilha via
//      Apps Script, que RECALCULA os valores no lado do vendedor — o que
//      o navegador alega nunca é a fonte da verdade;
//   2) o WhatsApp abre com o resumo e o número do pedido.
// Sem FRETE_CSV_URL/PEDIDOS_URL configurados, tudo degrada para
// "a combinar" e envio só pelo WhatsApp.
import { getItems } from './cart.js'
import { formatPreco, parseCsv, parsePreco } from './catalog.js'
import { FRETE_CSV_URL, FRETE_GRATIS_ACIMA, LOJA_COORDS, PEDIDOS_URL } from '../config.js'

const WHATSAPP = '5511943259368'

function esc(s) {
  const d = document.createElement('div')
  d.textContent = s || ''
  return d.innerHTML
}

/* ------------------------------------------------------------------ */
/* Frete: CEP -> coordenadas (BrasilAPI) -> distância -> faixa da aba  */
/* ------------------------------------------------------------------ */
let faixasCache = null

async function loadFaixas() {
  if (faixasCache) return faixasCache
  const url = window.__bfFreteUrl ?? FRETE_CSV_URL
  if (!url) return null
  try {
    const res = await fetch(url)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    // parser robusto: células como "15,00" vêm com aspas e vírgula no CSV
    const rows = parseCsv(await res.text())
    const faixas = []
    for (const [a, b] of rows.slice(1)) {
      const km = parseFloat(String(a).replace(',', '.'))
      const valor = parsePreco(String(b))
      if (Number.isFinite(km) && valor != null) faixas.push({ km, valor })
    }
    faixas.sort((x, y) => x.km - y.km)
    console.info(`[frete] tabela carregada: ${faixas.length} faixas (até ${faixas.at(-1)?.km ?? 0} km)`)
    faixasCache = faixas
    return faixas
  } catch (e) {
    console.warn('[frete] tabela indisponível:', e.message)
    return null
  }
}

function haversineKm(a, b) {
  const rad = (d) => (d * Math.PI) / 180
  const dLat = rad(b.lat - a.lat)
  const dLng = rad(b.lng - a.lng)
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(rad(a.lat)) * Math.cos(rad(b.lat)) * Math.sin(dLng / 2) ** 2
  return 6371 * 2 * Math.asin(Math.sqrt(h))
}

// CEP -> { endereco, coords }. A BrasilAPI devolve o endereço sempre, mas
// coordenadas só para parte dos CEPs; quando faltam, a AwesomeAPI cobre
// (tem lat/lng para praticamente todos) — sem ela o frete virava
// "a combinar" para quase todo CEP.
async function buscarCep(clean) {
  let endereco = null
  let coords = null
  try {
    const res = await fetch((window.__bfCepBase ?? 'https://brasilapi.com.br/api/cep/v2/') + clean)
    if (res.ok) {
      const d = await res.json()
      endereco = [d.street, d.neighborhood, d.city && `${d.city} - ${d.state}`].filter(Boolean).join(', ')
      if (d.location?.coordinates?.latitude) {
        coords = { lat: Number(d.location.coordinates.latitude), lng: Number(d.location.coordinates.longitude) }
      }
    }
  } catch { /* tenta a próxima fonte */ }
  if (!coords) {
    try {
      const res = await fetch((window.__bfCepGeoBase ?? 'https://cep.awesomeapi.com.br/json/') + clean)
      if (res.ok) {
        const d = await res.json()
        if (d.lat && d.lng) coords = { lat: Number(d.lat), lng: Number(d.lng) }
        if (!endereco) {
          endereco = [d.address, d.district, d.city && `${d.city} - ${d.state}`].filter(Boolean).join(', ')
        }
      }
    } catch { /* fica sem coordenadas */ }
  }
  if (!coords) console.warn(`[frete] CEP ${clean} sem coordenadas nas duas fontes`)
  return { endereco: endereco || null, coords }
}

// devolve { valor|null, label, endereco|null, km|null }
export async function calcularFrete(cep, subtotal) {
  const clean = cep.replace(/\D/g, '')
  if (clean.length !== 8) return { valor: null, label: 'CEP inválido', endereco: null, km: null }
  const { endereco, coords } = await buscarCep(clean)
  if (subtotal >= FRETE_GRATIS_ACIMA) {
    return { valor: 0, label: 'Grátis', endereco, km: null }
  }
  const faixas = await loadFaixas()
  if (!faixas || !coords) return { valor: null, label: 'Frete a combinar pelo WhatsApp', endereco, km: null }
  const km = haversineKm(LOJA_COORDS, coords)
  console.info(`[frete] CEP ${clean}: ~${km.toFixed(1)} km da loja`)
  const faixa = faixas.find((f) => km <= f.km)
  if (!faixa) return { valor: null, label: `Frete a combinar pelo WhatsApp (~${Math.round(km)} km)`, endereco, km }
  return { valor: faixa.valor, label: formatPreco(faixa.valor), endereco, km }
}

/* ------------------------------------------------------------------ */
/* Página de finalização                                               */
/* ------------------------------------------------------------------ */
let ultimoFrete = { valor: null, label: '—', endereco: null, km: null }

export function renderCheckout(host) {
  const items = getItems()
  if (!items.length) {
    host.innerHTML = `
      <div class="container">
        <div class="section-header"><h2 class="title-section">Finalizar pedido</h2></div>
        <div class="bf-cat__empty">
          <p>Seu carrinho está vazio. Adicione produtos e volte aqui para finalizar.</p>
          <a class="bf-pdp__whats" style="background:var(--color_button_buy_bg)" href="#" data-bf-close-pdp>Ver produtos</a>
        </div>
      </div>`
    document.title = 'Finalizar pedido - BateForte Materiais para Construção'
    return
  }
  const subtotal = items.reduce((n, i) => n + (i.price || 0) * i.qty, 0)
  const allPriced = items.every((i) => i.price != null)
  ultimoFrete = { valor: null, label: '—', endereco: null, km: null }
  host.innerHTML = `
    <div class="container">
      <nav class="bf-pdp__breadcrumb">
        <a href="#" data-bf-close-pdp>Início</a><span> / </span><strong>Finalizar pedido</strong>
      </nav>
      <div class="section-header"><h2 class="title-section">Finalizar pedido</h2></div>
      <div class="bf-checkout">
        <div class="bf-checkout__items bf-account__card">
          <h3>Seu pedido</h3>
          <ul class="bf-cart-list">
            ${items
              .map(
                (i) => `
            <li class="bf-cart-item">
              ${i.img ? `<img src="${esc(i.img)}" alt="">` : ''}
              <div class="bf-cart-item__info">
                <span class="bf-cart-item__name">${esc(i.name)}</span>
                <span class="bf-cart-item__price">${i.qty}x — ${i.price != null ? formatPreco(i.price * i.qty) : 'sob consulta'}</span>
              </div>
            </li>`
              )
              .join('')}
          </ul>
        </div>
        <form class="bf-checkout__form bf-account__card" data-bf-checkout novalidate>
          <h3>Entrega</h3>
          <label>Nome <input type="text" name="nome" required placeholder="Seu nome"></label>
          <label>WhatsApp <input type="tel" name="fone" required placeholder="(11) 9...."></label>
          <label>CEP <input type="tel" name="cep" required placeholder="00000-000" maxlength="9" data-bf-cep></label>
          <p class="bf-checkout__endereco" data-bf-endereco hidden></p>
          <div class="bf-checkout__resumo">
            <div><span>Subtotal</span><strong>${allPriced ? formatPreco(subtotal) : `${formatPreco(subtotal)} + itens sob consulta`}</strong></div>
            <div><span>Frete</span><strong data-bf-frete>Informe o CEP</strong></div>
            <div class="bf-checkout__total"><span>Total</span><strong data-bf-total>—</strong></div>
          </div>
          <p class="bf-account__error" hidden></p>
          <button type="submit" class="bf-cart-checkout">Enviar pedido pelo WhatsApp</button>
          <p class="bf-account__note">Sem pagamento pelo site: o pedido é registrado e a compra é confirmada na conversa do WhatsApp.</p>
        </form>
      </div>
    </div>`
  document.title = 'Finalizar pedido - BateForte Materiais para Construção'
}

function atualizarTotais(form, items) {
  const subtotal = items.reduce((n, i) => n + (i.price || 0) * i.qty, 0)
  const allPriced = items.every((i) => i.price != null)
  form.querySelector('[data-bf-frete]').textContent = ultimoFrete.label
  const totalEl = form.querySelector('[data-bf-total]')
  if (ultimoFrete.valor != null && allPriced) {
    totalEl.textContent = formatPreco(subtotal + ultimoFrete.valor)
  } else if (ultimoFrete.valor != null) {
    totalEl.textContent = `${formatPreco(subtotal + ultimoFrete.valor)} + itens sob consulta`
  } else {
    totalEl.textContent = 'a confirmar'
  }
}

function gerarNumeroPedido() {
  const d = new Date()
  const p = (n) => String(n).padStart(2, '0')
  return `BF-${d.getFullYear()}${p(d.getMonth() + 1)}${p(d.getDate())}-${p(d.getHours())}${p(d.getMinutes())}${p(d.getSeconds())}`
}

// grava o pedido bruto na planilha (Apps Script recalcula lá dentro)
function registrarPedido(pedido) {
  const url = window.__bfPedidosUrl ?? PEDIDOS_URL
  if (!url) return
  try {
    const body = JSON.stringify(pedido)
    if (!navigator.sendBeacon?.(url, new Blob([body], { type: 'text/plain' }))) {
      fetch(url, { method: 'POST', mode: 'no-cors', body })
    }
  } catch (e) {
    console.warn('[pedidos] registro falhou:', e.message)
  }
}

export function initCheckout() {
  // CEP: calcula o frete ao completar 8 dígitos
  document.addEventListener('input', async (e) => {
    if (!e.target.matches('[data-bf-cep]')) return
    const form = e.target.closest('[data-bf-checkout]')
    const cep = e.target.value.replace(/\D/g, '')
    e.target.value = cep.length > 5 ? `${cep.slice(0, 5)}-${cep.slice(5, 8)}` : cep
    if (cep.length !== 8) return
    const items = getItems()
    const subtotal = items.reduce((n, i) => n + (i.price || 0) * i.qty, 0)
    form.querySelector('[data-bf-frete]').textContent = 'calculando...'
    ultimoFrete = await calcularFrete(cep, subtotal)
    const end = form.querySelector('[data-bf-endereco]')
    end.hidden = !ultimoFrete.endereco
    end.textContent = ultimoFrete.endereco || ''
    atualizarTotais(form, items)
  })

  document.addEventListener('submit', (e) => {
    const form = e.target.closest('[data-bf-checkout]')
    if (!form) return
    e.preventDefault()
    const data = Object.fromEntries(new FormData(form))
    const errEl = form.querySelector('.bf-account__error')
    if (!data.nome.trim() || !data.fone.trim() || data.cep.replace(/\D/g, '').length !== 8) {
      errEl.textContent = 'Preencha nome, WhatsApp e um CEP válido.'
      errEl.hidden = false
      return
    }
    errEl.hidden = true
    const items = getItems()
    const subtotal = items.reduce((n, i) => n + (i.price || 0) * i.qty, 0)
    const numero = gerarNumeroPedido()

    registrarPedido({
      numero,
      nome: data.nome.trim(),
      fone: data.fone.trim(),
      cep: data.cep,
      endereco: ultimoFrete.endereco || '',
      km: ultimoFrete.km != null ? Math.round(ultimoFrete.km * 10) / 10 : '',
      itens: items.map((i) => ({ ref: i.ref || '', nome: i.name, qtd: i.qty, preco_alegado: i.price })),
      subtotal_alegado: subtotal,
      frete_alegado: ultimoFrete.valor,
      total_alegado: ultimoFrete.valor != null ? subtotal + ultimoFrete.valor : null,
    })

    const linhas = items.map(
      (i) => `- ${i.qty}x ${i.name}${i.ref ? ` (Ref: ${i.ref})` : ''}${i.price != null ? ` — ${formatPreco(i.price * i.qty)}` : ' — sob consulta'}`
    )
    const msg = [
      `Olá! Pedido *${numero}*`,
      `Nome: ${data.nome.trim()}`,
      `CEP: ${data.cep}${ultimoFrete.endereco ? ` (${ultimoFrete.endereco})` : ''}`,
      '',
      ...linhas,
      '',
      `Subtotal: ${formatPreco(subtotal)}`,
      `Frete: ${ultimoFrete.label}`,
      `Total: ${ultimoFrete.valor != null ? formatPreco(subtotal + ultimoFrete.valor) : 'a confirmar'}`,
    ].join('\n')
    window.open(`https://api.whatsapp.com/send?phone=${WHATSAPP}&text=${encodeURIComponent(msg)}`, '_blank')
  })
}
