// Catálogo via planilha do Google (opcional).
// Quando CATALOG_URL está configurado (src/config.js), o site baixa a
// planilha publicada em CSV e RECONSTRÓI as vitrines da home a partir
// dela — cada linha da planilha é um produto. Se a URL estiver vazia ou
// o download falhar, nada muda: o markup capturado continua valendo
// (é o "plano B" embutido).
import { CATALOG_URL } from '../config.js'
import { msgProduto, waLink } from './whatsapp.js'

const FETCH_TIMEOUT_MS = 4000

// Categorias vindas da planilha (coluna "categoria"): cada valor único
// vira um departamento no site (navbar, menu mobile, mega-menu e footer).
// Vazio enquanto a planilha não carrega — aí valem as categorias fixas.
export const dynamicCategories = []

const ICONS = new Set(['cimento', 'areia', 'ferro', 'eletrica', 'hidraulica', 'telhas', 'tintas'])
const PRETTY = { eletrica: 'Elétrica', hidraulica: 'Hidráulica' }
const slugify = (s) =>
  s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
const catIcon = (slug) => `/assets/bf-icon-${ICONS.has(slug) ? slug : 'generic'}.svg`

function prettyName(raw, slug) {
  if (PRETTY[slug]) return PRETTY[slug]
  // se veio tudo minúsculo na planilha, capitaliza; senão respeita como digitado
  if (raw === raw.toLowerCase()) {
    return raw.replace(/(^|\s)\S/g, (c) => c.toUpperCase())
  }
  return raw
}

// parser de CSV com suporte a aspas, vírgulas e quebras de linha em células
export function parseCsv(text) {
  const rows = []
  let row = []
  let cell = ''
  let inQuotes = false
  for (let i = 0; i < text.length; i++) {
    const c = text[i]
    if (inQuotes) {
      if (c === '"' && text[i + 1] === '"') {
        cell += '"'
        i++
      } else if (c === '"') {
        inQuotes = false
      } else {
        cell += c
      }
    } else if (c === '"') {
      inQuotes = true
    } else if (c === ',') {
      row.push(cell)
      cell = ''
    } else if (c === '\n' || c === '\r') {
      if (c === '\r' && text[i + 1] === '\n') i++
      row.push(cell)
      cell = ''
      if (row.some((v) => v.trim() !== '')) rows.push(row)
      row = []
    } else {
      cell += c
    }
  }
  row.push(cell)
  if (row.some((v) => v.trim() !== '')) rows.push(row)
  return rows
}

function toProducts(rows) {
  if (!rows.length) return []
  const header = rows[0].map((h) => h.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ''))
  const col = (name) => header.indexOf(name)
  const idx = {
    ativo: col('ativo'), nome: col('nome'), categoria: col('categoria'),
    vitrine: col('vitrine'), imagem: col('imagem'), referencia: col('referencia'),
    tag: col('tag'), preco: col('preco'),
  }
  if (idx.nome === -1) return []
  const get = (r, i) => (i >= 0 && r[i] != null ? String(r[i]).trim() : '')
  return rows
    .slice(1)
    .map((r, n) => ({
      id: `product-bf-${n + 1}`,
      ativo: get(r, idx.ativo),
      nome: get(r, idx.nome),
      categoria: slugify(get(r, idx.categoria)),
      categoriaNome: get(r, idx.categoria).trim(),
      vitrine: get(r, idx.vitrine),
      imagem: driveToDirect(get(r, idx.imagem)),
      referencia: get(r, idx.referencia),
      tag: get(r, idx.tag),
      preco: parsePreco(get(r, idx.preco)),
    }))
    .filter((p) => p.nome && !/^(nao|não|n|0|false)$/i.test(p.ativo))
}

// aceita link de compartilhamento do Google Drive e converte para imagem direta
function driveToDirect(url) {
  const m = url.match(/drive\.google\.com\/(?:file\/d\/|open\?id=)([\w-]+)/)
  return m ? `https://lh3.googleusercontent.com/d/${m[1]}` : url
}

// "39,90", "R$ 1.234,56" ou "39.90" -> número (ou null se vazio/ilegível)
export function parsePreco(s) {
  if (!s) return null
  const clean = s.replace(/[^\d,.]/g, '')
  if (!clean) return null
  const norm = clean.includes(',') ? clean.replace(/\./g, '').replace(',', '.') : clean
  const n = parseFloat(norm)
  return Number.isFinite(n) ? n : null
}

export function formatPreco(n) {
  return n.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

function esc(s) {
  const d = document.createElement('div')
  d.textContent = s || ''
  return d.innerHTML
}

const TAG_CLASS = { destaque: 'featured', novidade: 'new', promocao: 'discount', promoção: 'discount' }

function cardHtml(p) {
  const wa = waLink(msgProduto({ nome: p.nome, referencia: p.referencia, preco: p.preco }))
  const tagCls = TAG_CLASS[p.tag.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')] || 'featured'
  return `
  <div class="item swiper-slide">
    <div class="product upon_request has-fast-shopping" id="${p.id}" product-ref="${esc(p.referencia) || 'ref-empty'}" data-bf-category="${esc(p.categoria)}"${p.preco != null ? ` data-bf-price="${p.preco}"` : ''}>
      <div class="image">
        <a href="#/produto/${p.id}" class="space-image"><img loading="lazy" class="lazyload loaded" src="${esc(p.imagem)}" alt="${esc(p.nome)}"></a>
        <div class="product-tags tags-custom" data-tags-count="${p.tag ? 1 : 0}">
          ${p.tag ? `<div class="tag ${tagCls}"><span class="tag-text">${esc(p.tag)}</span></div>` : ''}
        </div>
      </div>
      <a class="product-info" href="#/produto/${p.id}">
        <div class="wrapper-product-name"><h3 class="product-name">${esc(p.nome)}</h3></div>
        <div class="product-price">${p.preco != null ? `<span class="bf-price">${formatPreco(p.preco)}</span>` : ''}</div>
      </a>
      <div class="actions"></div>
      <div class="buy-whatsapp buy-whatsapp--list-product">
        <a href="${wa}" target="_blank" rel="noopener noreferrer"><i class="icon icon-whatsapp v-align-middle"></i> Comprar pelo Whats </a>
      </div>
    </div>
  </div>`
}

const norm = (s) => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim()

// Fotos do catálogo embutido, por nome normalizado. Usadas quando a
// célula "imagem" da planilha está vazia ou aponta para o placeholder
// transparente da captura (alguns produtos originais guardavam a foto
// real num background-image de CSS, não no src).
function snapshotImages() {
  const map = new Map()
  document.querySelectorAll('.site-main .section-showcase .product[id]').forEach((p) => {
    const img = p.querySelector('.image img')
    if (!img) return
    let src = img.getAttribute('src') || ''
    if (src.endsWith('.svg')) {
      const m = getComputedStyle(img).backgroundImage.match(/url\("(data:[^"]+)"\)/)
      if (m) src = m[1]
    }
    const name = p.querySelector('.product-name')?.textContent.trim()
    if (name && src) map.set(norm(name), src)
  })
  return map
}

// Substitui os produtos das vitrines da home pelos da planilha.
function rebuildShowcases(products) {
  const embedded = snapshotImages()
  products.forEach((p) => {
    if (!p.imagem || p.imagem.endsWith('.svg')) {
      p.imagem = embedded.get(norm(p.nome)) || p.imagem
    }
  })
  const byVitrine = new Map()
  products.forEach((p) => {
    const k = norm(p.vitrine || '')
    if (!byVitrine.has(k)) byVitrine.set(k, [])
    byVitrine.get(k).push(p)
  })
  document.querySelectorAll('.site-main .section-showcase').forEach((sec) => {
    const title = norm(sec.querySelector('.title-section')?.textContent || '')
    const wrapper = sec.querySelector('.list-product .swiper-wrapper')
    if (!title || !wrapper) return
    const list = byVitrine.get(title) || []
    if (!list.length) {
      sec.style.display = 'none' // vitrine sem produtos na planilha
      return
    }
    wrapper.innerHTML = list.map(cardHtml).join('')
  })
}

// Regenera navbar, mega-menu, menu mobile e footer com as categorias da
// planilha (na ordem em que aparecem nas linhas).
function rebuildCategoryNav(cats) {
  if (!cats.length) return
  const item = (c) => `
    <a href="#/categoria/${c.slug}" title="${esc(c.name)}">
      <div class="category-image"><img src="${catIcon(c.slug)}" alt="${esc(c.name)}" width="20" height="20"></div>
      <div class="name"> ${esc(c.name)} </div>
    </a>`

  // navbar desktop: troca os itens de departamento (ficam Todas Categorias e Ofertas)
  const navUl = document.querySelector('.nav .list')
  if (navUl) {
    navUl.querySelectorAll(':scope > li').forEach((li) => {
      if (li.querySelector(':scope > a[href^="#/categoria/"]')) li.remove()
    })
    const offer = navUl.querySelector('li.categoria-offer')
    cats.forEach((c) => {
      const li = document.createElement('li')
      li.className = 'first-level'
      li.innerHTML = item(c)
      navUl.insertBefore(li, offer)
    })
  }

  // mega-menu "Todas Categorias"
  const mega = document.querySelector('.nav .all-categories .wrapper-categories')
  if (mega) {
    mega.innerHTML = cats
      .map((c) => `<li class="sub"><a href="#/categoria/${c.slug}" title="${esc(c.name)}">
        <div class="category-image"><img src="${catIcon(c.slug)}" alt="${esc(c.name)}" width="20" height="20"></div>
        ${esc(c.name)} </a></li>`)
      .join('')
  }

  // menu mobile
  const mob = document.querySelector('#menu-mobile .nav-mobile .list')
  if (mob) {
    mob.innerHTML = cats
      .map((c) => `<li><a href="#/categoria/${c.slug}">
        <div class="category-image"><img src="${catIcon(c.slug)}" alt="${esc(c.name)}" width="20" height="20"></div>
        ${esc(c.name)} </a></li>`)
      .join('')
  }

  // footer (coluna Categorias)
  const foot = document.querySelector('.footer .box-categories .list')
  if (foot) {
    foot.innerHTML = cats
      .map((c) => `<li><a href="#/categoria/${c.slug}" title="${esc(c.name)}">${esc(c.name)}</a></li>`)
      .join('')
  }
}

export async function initCatalog() {
  const url = window.__bfCatalogUrl ?? CATALOG_URL
  if (!url) return false
  try {
    const ctrl = new AbortController()
    const t = setTimeout(() => ctrl.abort(), FETCH_TIMEOUT_MS)
    const res = await fetch(url, { signal: ctrl.signal })
    clearTimeout(t)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const products = toProducts(parseCsv(await res.text()))
    if (!products.length) throw new Error('planilha sem produtos')
    rebuildShowcases(products)
    // categorias na ordem em que aparecem na planilha
    const seen = new Set()
    products.forEach((p) => {
      if (p.categoria && !seen.has(p.categoria)) {
        seen.add(p.categoria)
        dynamicCategories.push({ slug: p.categoria, name: prettyName(p.categoriaNome, p.categoria) })
      }
    })
    rebuildCategoryNav(dynamicCategories)
    return true
  } catch (e) {
    // plano B: mantém o catálogo embutido (markup capturado)
    console.warn('[catalogo] usando catálogo embutido:', e.message)
    return false
  }
}
