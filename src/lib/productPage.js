// Página de produto interna.
// Os links dos produtos apontavam para o site antigo (atlantanet.com.br);
// aqui cada clique abre uma página de produto DENTRO do site, montada em
// runtime com os dados que o próprio card carrega (nome, ref, imagem, tag,
// link de WhatsApp). Navegação por hash (#/produto/<id>) para o botão
// voltar do navegador funcionar como numa página real.
import { addItem, closeCart, openCart } from './cart.js'

const products = new Map()
let originalTitle = ''

function esc(s) {
  const d = document.createElement('div')
  d.textContent = s || ''
  return d.innerHTML
}

function collectProducts() {
  document.querySelectorAll('.product[id]').forEach((p) => {
    const id = p.id
    if (!id || products.has(id)) return
    const section = p.closest('.section-showcase')
    products.set(id, {
      id,
      ref: (p.getAttribute('product-ref') || '').replace('ref-empty', ''),
      name: p.querySelector('.product-name')?.textContent.trim() || 'Produto',
      img: p.querySelector('.image img')?.getAttribute('src') || '',
      tag: p.querySelector('.product-tags .tag-text')?.textContent.trim() || '',
      whats: p.querySelector('.buy-whatsapp a')?.getAttribute('href') || '',
      section: section?.querySelector('.title-section')?.textContent.trim() || 'Produtos',
      sectionEl: section,
    })
  })
}

function relatedTo(prod, max = 4) {
  const rel = []
  for (const p of products.values()) {
    if (p.id !== prod.id && p.section === prod.section) rel.push(p)
    if (rel.length >= max) break
  }
  return rel
}

function render(prod) {
  let host = document.querySelector('.bf-pdp')
  if (!host) {
    host = document.createElement('div')
    host.className = 'bf-pdp'
    document.querySelector('main.site-main')?.appendChild(host)
  }
  const related = relatedTo(prod)
  host.innerHTML = `
    <div class="container">
      <nav class="bf-pdp__breadcrumb">
        <a href="#" data-bf-close-pdp>Início</a>
        <span> / ${esc(prod.section)} / </span>
        <strong>${esc(prod.name)}</strong>
      </nav>
      <div class="bf-pdp__grid">
        <div class="bf-pdp__image">
          ${prod.tag ? `<span class="bf-pdp__tag">${esc(prod.tag)}</span>` : ''}
          <img src="${esc(prod.img)}" alt="${esc(prod.name)}">
        </div>
        <div class="bf-pdp__info">
          <h1 class="bf-pdp__name">${esc(prod.name)}</h1>
          ${prod.ref ? `<p class="bf-pdp__ref">Referência: ${esc(prod.ref)}</p>` : ''}
          <p class="bf-pdp__price">Preço sob consulta</p>
          <p class="bf-pdp__note">Consulte condições, estoque e formas de pagamento pelo WhatsApp ou televendas <a href="tel:+551136483388">(11) 3648-3388</a>.</p>
          <div class="bf-pdp__qty">
            <span>Quantidade</span>
            <button type="button" data-bf-pdp-qty="-1" aria-label="Diminuir">−</button>
            <strong data-bf-pdp-qty-value>1</strong>
            <button type="button" data-bf-pdp-qty="1" aria-label="Aumentar">+</button>
          </div>
          <button type="button" class="bf-pdp__add" data-bf-pdp-add="${esc(prod.id)}">Adicionar ao carrinho</button>
          ${prod.whats ? `<a class="bf-pdp__whats" href="${esc(prod.whats)}" target="_blank" rel="noopener noreferrer"><i class="icon icon-whatsapp v-align-middle"></i> Comprar pelo WhatsApp</a>` : ''}
        </div>
      </div>
      ${related.length ? `
      <div class="bf-pdp__related">
        <div class="section-header"><h2 class="title-section">Produtos relacionados</h2></div>
        <div class="bf-pdp__related-grid">
          ${related
            .map(
              (r) => `
          <a class="bf-pdp__related-card" href="#/produto/${esc(r.id)}">
            <img src="${esc(r.img)}" alt="${esc(r.name)}">
            <span class="bf-pdp__related-name">${esc(r.name)}</span>
            <span class="bf-pdp__related-price">Preço sob consulta</span>
          </a>`
            )
            .join('')}
        </div>
      </div>` : ''}
    </div>`
  document.body.classList.add('bf-pdp-open')
  document.title = `${prod.name} - BateForte Materiais para Construção & Madeireira`
  window.scrollTo(0, 0)
}

function close() {
  document.body.classList.remove('bf-pdp-open')
  document.title = originalTitle
}

function onHashChange() {
  const m = location.hash.match(/^#\/produto\/(.+)$/)
  if (m) {
    const prod = products.get(decodeURIComponent(m[1]))
    if (prod) {
      closeCart()
      render(prod)
      return
    }
  }
  close()
}

export function initProductPage() {
  originalTitle = document.title
  collectProducts()

  document.addEventListener('click', (e) => {
    // clique no card do produto (imagem ou nome) abre a página interna
    const link = e.target.closest('.product a.space-image, .product a.product-info')
    if (link) {
      const id = link.closest('.product')?.id
      if (id && products.has(id)) {
        e.preventDefault()
        location.hash = `#/produto/${id}`
      }
      return
    }
    if (e.target.closest('[data-bf-close-pdp]')) {
      e.preventDefault()
      location.hash = ''
      return
    }
    // quantidade na página de produto
    const qtyBtn = e.target.closest('[data-bf-pdp-qty]')
    if (qtyBtn) {
      const value = qtyBtn.parentElement.querySelector('[data-bf-pdp-qty-value]')
      value.textContent = String(Math.max(1, Number(value.textContent) + Number(qtyBtn.dataset.bfPdpQty)))
      return
    }
    const add = e.target.closest('[data-bf-pdp-add]')
    if (add) {
      const prod = products.get(add.dataset.bfPdpAdd)
      const qty = Number(document.querySelector('[data-bf-pdp-qty-value]')?.textContent || 1)
      if (prod) {
        addItem({ id: prod.id, ref: prod.ref, name: prod.name, img: prod.img, href: `#/produto/${prod.id}` }, qty)
        openCart()
      }
    }
  })

  window.addEventListener('hashchange', onHashChange)
  onHashChange() // abre direto se a URL já tiver #/produto/...
}
