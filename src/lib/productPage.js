// Página de produto interna.
// Os links dos produtos apontavam para o site antigo (atlantanet.com.br);
// aqui cada clique abre uma página de produto DENTRO do site, montada em
// runtime com os dados que o próprio card carrega (nome, ref, imagem, tag,
// link de WhatsApp). Navegação por hash (#/produto/<id>) para o botão
// voltar do navegador funcionar como numa página real.
import { addItem, closeCart, openCart } from './cart.js'
import { initCheckout, renderCheckout } from './checkout.js'
import { catalogProducts, dynamicCategories, formatPreco, isOferta } from './catalog.js'
import { msgBusca, msgCategoria, msgProduto, waLink } from './whatsapp.js'

const products = new Map()
let originalTitle = ''

// Departamentos reais da loja (fachada: Cimento, Areia, Ferro, Elétrica,
// Hidráulica — mais Telhas/Tintas das vitrines). Cada página de
// categoria lista os produtos capturados cujo nome casa com o padrão.
const CATEGORIES = {
  cimento: { name: 'Cimento', test: /cimento|argamassa|concreto|bloco|\bcal\b/i },
  areia: { name: 'Areia', test: /areia|pedra|brita/i },
  ferro: { name: 'Ferro', test: /\bferro\b|vergalh|treli|arame|prego/i },
  eletrica: { name: 'Elétrica', test: /cabo|\bfio\b|fios|el[eé]tr|disjuntor|tomada|interruptor/i },
  hidraulica: { name: 'Hidráulica', test: /hidr|tubo|cano|conex|torneira|caixa d/i },
  telhas: { name: 'Telhas', test: /telha/i },
  tintas: { name: 'Tintas', test: /tinta|esmalte|self base|verniz|selador/i },
}
const WHATSAPP_STORE = 'https://wa.me/5511974659658'

function getHost() {
  let host = document.querySelector('.bf-pdp')
  if (!host) {
    host = document.createElement('div')
    host.className = 'bf-pdp'
    document.querySelector('main.site-main')?.appendChild(host)
  }
  return host
}

// Categoria válida: da planilha (dinâmica) ou do conjunto fixo embutido
function catInfo(slug) {
  const dyn = dynamicCategories.find((c) => c.slug === slug)
  if (dyn) return dyn
  if (CATEGORIES[slug]) return { slug, name: CATEGORIES[slug].name }
  return null
}

function esc(s) {
  const d = document.createElement('div')
  d.textContent = s || ''
  return d.innerHTML
}

function resolveImg(imgEl) {
  if (!imgEl) return ''
  const src = imgEl.getAttribute('src') || ''
  // Nos cards do mega-menu a foto real está num background-image congelado
  // (var --sf-img-N do SingleFile) e o src é só um placeholder .svg
  const bg = getComputedStyle(imgEl).backgroundImage
  const m = bg && bg.match(/url\("(data:[^"]+)"\)/)
  if (m && src.endsWith('.svg')) return m[1]
  return src
}

function collectProducts() {
  // Planilha ativa = fonte ÚNICA da verdade. Os produtos capturados
  // (hardcoded no markup original — ex.: os cimentos do ShowcaseCimento)
  // são ignorados, para não "vazarem" em categoria/busca/página de produto.
  if (catalogProducts.length) {
    catalogProducts.forEach((p) => {
      if (products.has(p.id)) return
      products.set(p.id, {
        id: p.id,
        ref: p.referencia || '',
        name: p.nome || 'Produto',
        img: p.imagem || '',
        tag: p.tag || '',
        section: p.vitrine || p.categoriaNome || 'Produtos',
        sectionEl: null,
        cat: p.categoria || '',
        price: p.preco != null ? p.preco : null,
      })
    })
    return
  }
  // Plano B (planilha fora do ar): usa os produtos capturados do DOM,
  // classificados pelo padrão do nome (CATEGORIES), para o site nunca ficar vazio.
  document.querySelectorAll('.product[id]').forEach((p) => {
    const id = p.id
    if (!id || products.has(id)) return
    const section = p.closest('.section-showcase')
    products.set(id, {
      id,
      ref: (p.getAttribute('product-ref') || '').replace('ref-empty', ''),
      name: p.querySelector('.product-name')?.textContent.trim() || 'Produto',
      img: resolveImg(p.querySelector('.image img')),
      tag: p.querySelector('.product-tags .tag-text')?.textContent.trim() || '',
      section: section?.querySelector('.title-section')?.textContent.trim() || 'Produtos',
      sectionEl: section,
      cat: p.dataset.bfCategory || '',
      price: p.dataset.bfPrice ? Number(p.dataset.bfPrice) : null,
    })
  })
}

const priceLabel = (p) => (p.price != null ? formatPreco(p.price) : 'Preço sob consulta')

// Reaponta todos os links que iam para o site antigo (atlantanet.com.br)
// para dentro deste site: produto -> #/produto/<id>, categoria/página que
// casa com um departamento -> #/categoria/<slug>, o resto -> home.
function rewriteOldSiteLinks() {
  document.querySelectorAll('a[href*="atlantanet.com.br"]').forEach((a) => {
    const prodEl = a.closest('.product[id]')
    if (prodEl && products.has(prodEl.id)) {
      a.setAttribute('href', `#/produto/${prodEl.id}`)
      a.removeAttribute('target')
      return
    }
    const hint = `${a.textContent} ${a.getAttribute('href')}`
    const slug = Object.keys(CATEGORIES).find((k) => CATEGORIES[k].test.test(hint))
    a.setAttribute('href', slug ? `#/categoria/${slug}` : '/')
    a.removeAttribute('target')
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
          <p class="bf-pdp__price">${priceLabel(prod)}</p>
          <p class="bf-pdp__note">Consulte condições, estoque e formas de pagamento pelo WhatsApp <a href="${WHATSAPP_STORE}" target="_blank" rel="noopener noreferrer">(11) 97465-9658</a>.</p>
          <div class="bf-pdp__qty">
            <span>Quantidade</span>
            <button type="button" data-bf-pdp-qty="-1" aria-label="Diminuir">−</button>
            <strong data-bf-pdp-qty-value>1</strong>
            <button type="button" data-bf-pdp-qty="1" aria-label="Aumentar">+</button>
          </div>
          <button type="button" class="bf-pdp__add" data-bf-pdp-add="${esc(prod.id)}">Adicionar ao carrinho</button>
          <a class="bf-pdp__whats" data-bf-pdp-whats href="${waLink(msgProduto({ nome: prod.name, referencia: prod.ref, preco: prod.price, qtd: 1 }))}" target="_blank" rel="noopener noreferrer"><i class="icon icon-whatsapp v-align-middle"></i> Comprar pelo WhatsApp</a>
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
            <span class="bf-pdp__related-price">${priceLabel(r)}</span>
          </a>`
            )
            .join('')}
        </div>
      </div>` : ''}
    </div>`
  document.body.classList.add('bf-pdp-open')
  document.title = `${prod.name} - BateForte Materiais para Construção`
  window.scrollTo(0, 0)
}

const norm = (s) =>
  s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, ' ').trim()

function renderSearch(query) {
  let host = document.querySelector('.bf-pdp')
  if (!host) {
    host = document.createElement('div')
    host.className = 'bf-pdp'
    document.querySelector('main.site-main')?.appendChild(host)
  }
  const terms = norm(query).split(' ').filter(Boolean)
  const seen = new Set()
  const list = [...products.values()].filter((p) => {
    const name = norm(p.name)
    if (!terms.every((t) => name.includes(t))) return false
    if (seen.has(name)) return false
    seen.add(name)
    return true
  })
  const buscaLink = waLink(msgBusca(query))
  host.innerHTML = `
    <div class="container">
      <nav class="bf-pdp__breadcrumb">
        <a href="#" data-bf-close-pdp>Início</a><span> / </span><strong>Busca</strong>
      </nav>
      <div class="section-header"><h2 class="title-section">Resultados para “${esc(query)}”</h2></div>
      ${list.length ? `
      <p class="bf-cat__count">${list.length} ${list.length === 1 ? 'produto encontrado' : 'produtos encontrados'}</p>
      <div class="bf-pdp__related-grid">
        ${list
          .map(
            (p) => `
        <a class="bf-pdp__related-card" href="#/produto/${esc(p.id)}">
          <img src="${esc(p.img)}" alt="${esc(p.name)}">
          <span class="bf-pdp__related-name">${esc(p.name)}</span>
          <span class="bf-pdp__related-price">${priceLabel(p)}</span>
        </a>`
          )
          .join('')}
      </div>` : `
      <div class="bf-cat__empty">
        <p>Não encontramos <strong>“${esc(query)}”</strong> no catálogo online — mas a loja tem muito mais em estoque. Fale com a gente!</p>
        <a class="bf-pdp__whats" href="${buscaLink}" target="_blank" rel="noopener noreferrer"><i class="icon icon-whatsapp v-align-middle"></i> Perguntar pelo WhatsApp</a>
      </div>`}
    </div>`
  document.body.classList.add('bf-pdp-open')
  document.title = `Busca: ${query} - BateForte Materiais para Construção`
  window.scrollTo(0, 0)
}

function renderCategory(slug) {
  const cat = catInfo(slug)
  const staticCat = CATEGORIES[slug]
  let host = document.querySelector('.bf-pdp')
  if (!host) {
    host = document.createElement('div')
    host.className = 'bf-pdp'
    document.querySelector('main.site-main')?.appendChild(host)
  }
  const seen = new Set()
  const list = [...products.values()].filter((p) => {
    // produtos da planilha usam a coluna "categoria"; os capturados, o padrão do nome
    if (p.cat ? p.cat !== slug : !(staticCat && staticCat.test.test(p.name))) return false
    const key = p.name.toLowerCase().replace(/\s+/g, ' ')
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })
  const categoriaLink = waLink(msgCategoria(cat.name))
  host.innerHTML = `
    <div class="container">
      <nav class="bf-pdp__breadcrumb">
        <a href="#" data-bf-close-pdp>Início</a>
        <span> / </span>
        <strong>${esc(cat.name)}</strong>
      </nav>
      <div class="section-header"><h2 class="title-section">${esc(cat.name)}</h2></div>
      ${list.length ? `
      <p class="bf-cat__count">${list.length} ${list.length === 1 ? 'produto' : 'produtos'}</p>
      <div class="bf-pdp__related-grid">
        ${list
          .map(
            (p) => `
        <a class="bf-pdp__related-card" href="#/produto/${esc(p.id)}">
          <img src="${esc(p.img)}" alt="${esc(p.name)}">
          <span class="bf-pdp__related-name">${esc(p.name)}</span>
          <span class="bf-pdp__related-price">${priceLabel(p)}</span>
        </a>`
          )
          .join('')}
      </div>` : `
      <div class="bf-cat__empty">
        <p>Trabalhamos com toda a linha de <strong>${esc(cat.name)}</strong> na loja — o catálogo online mostra só uma parte do estoque.</p>
        <a class="bf-pdp__whats" href="${categoriaLink}" target="_blank" rel="noopener noreferrer"><i class="icon icon-whatsapp v-align-middle"></i> Consultar pelo WhatsApp</a>
      </div>`}
    </div>`
  document.body.classList.add('bf-pdp-open')
  document.title = `${cat.name} - BateForte Materiais para Construção`
  window.scrollTo(0, 0)
}

// Página "Ofertas Especiais": lista os produtos marcados como oferta
// (coluna tag = Promoção/Oferta na planilha).
function renderOfertas() {
  const host = getHost()
  const seen = new Set()
  const list = [...products.values()].filter((p) => {
    if (!isOferta(p)) return false
    const key = p.name.toLowerCase().replace(/\s+/g, ' ')
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })
  const wa = waLink(msgCategoria('ofertas e promoções'))
  host.innerHTML = `
    <div class="container">
      <nav class="bf-pdp__breadcrumb">
        <a href="#" data-bf-close-pdp>Início</a><span> / </span><strong>Ofertas Especiais</strong>
      </nav>
      <div class="section-header"><h2 class="title-section">Ofertas Especiais</h2></div>
      ${list.length ? `
      <p class="bf-cat__count">${list.length} ${list.length === 1 ? 'produto em oferta' : 'produtos em oferta'}</p>
      <div class="bf-pdp__related-grid">
        ${list
          .map(
            (p) => `
        <a class="bf-pdp__related-card" href="#/produto/${esc(p.id)}">
          <img src="${esc(p.img)}" alt="${esc(p.name)}">
          <span class="bf-pdp__related-name">${esc(p.name)}</span>
          <span class="bf-pdp__related-price">${priceLabel(p)}</span>
        </a>`
          )
          .join('')}
      </div>` : `
      <div class="bf-cat__empty">
        <p>Nenhuma oferta no momento. Fale com a gente para conferir as condições da semana.</p>
        <a class="bf-pdp__whats" href="${wa}" target="_blank" rel="noopener noreferrer"><i class="icon icon-whatsapp v-align-middle"></i> Falar pelo WhatsApp</a>
      </div>`}
    </div>`
  document.body.classList.add('bf-pdp-open')
  document.title = 'Ofertas Especiais - BateForte Materiais para Construção'
  window.scrollTo(0, 0)
}

function close() {
  document.body.classList.remove('bf-pdp-open')
  document.title = originalTitle
}

function onHashChange() {
  const mp = location.hash.match(/^#\/produto\/(.+)$/)
  if (mp) {
    const prod = products.get(decodeURIComponent(mp[1]))
    if (prod) {
      closeCart()
      render(prod)
      return
    }
  }
  const mc = location.hash.match(/^#\/categoria\/([a-z0-9-]+)$/)
  if (mc && catInfo(mc[1])) {
    closeCart()
    renderCategory(mc[1])
    return
  }
  if (location.hash === '#/ofertas') {
    closeCart()
    renderOfertas()
    return
  }
  if (location.hash === '#/finalizar') {
    closeCart()
    renderCheckout(getHost())
    document.body.classList.add('bf-pdp-open')
    window.scrollTo(0, 0)
    return
  }
  const ms = location.hash.match(/^#\/busca\/(.+)$/)
  if (ms) {
    closeCart()
    renderSearch(decodeURIComponent(ms[1]))
    return
  }
  close()
}

export function initProductPage() {
  originalTitle = document.title
  collectProducts()
  rewriteOldSiteLinks()

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
      const qty = Math.max(1, Number(value.textContent) + Number(qtyBtn.dataset.bfPdpQty))
      value.textContent = String(qty)
      // mantém a mensagem do botão "Comprar pelo WhatsApp" com a quantidade atual
      const whats = document.querySelector('[data-bf-pdp-whats]')
      const prod = products.get(document.querySelector('[data-bf-pdp-add]')?.dataset.bfPdpAdd)
      if (whats && prod) {
        whats.href = waLink(msgProduto({ nome: prod.name, referencia: prod.ref, preco: prod.price, qtd: qty }))
      }
      return
    }
    const add = e.target.closest('[data-bf-pdp-add]')
    if (add) {
      const prod = products.get(add.dataset.bfPdpAdd)
      const qty = Number(document.querySelector('[data-bf-pdp-qty-value]')?.textContent || 1)
      if (prod) {
        addItem({ id: prod.id, ref: prod.ref, name: prod.name, img: prod.img, href: `#/produto/${prod.id}`, price: prod.price }, qty)
        openCart()
      }
    }
  })

  initCheckout()

  window.addEventListener('hashchange', onHashChange)
  onHashChange() // abre direto se a URL já tiver #/produto/...
}
