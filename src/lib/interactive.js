// Camada de interatividade BateForte.
// O site é uma captura estática (SingleFile): o markup dos carrosséis,
// menu e carrinho existe, mas sem comportamento. Este módulo liga tudo
// manipulando o DOM estático diretamente (os componentes nunca
// re-renderizam, então não há conflito com o React).
import Swiper from 'swiper'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { closeCart, initCart } from './cart.js'
import { initCatalog } from './catalog.js'
import { initProductPage } from './productPage.js'

// Skeleton das imagens: até cada <img> carregar, o container mostra um
// brilho cinza (as imagens já reservam o espaço via aspecto/altura fixa,
// então não há salto de layout). Marca bf-img-ready ao carregar.
function initImageSkeleton() {
  const ready = (img) => img.classList.add('bf-img-ready')
  const onEvt = (e) => { if (e.target.tagName === 'IMG') ready(e.target) }
  document.addEventListener('load', onEvt, true) // 'load' não borbulha -> captura
  document.addEventListener('error', onEvt, true)
  const scan = () => document.querySelectorAll('img:not(.bf-img-ready)').forEach((img) => { if (img.complete) ready(img) })
  scan()
  setTimeout(scan, 400)
  setTimeout(scan, 1500)
}

export async function initInteractive() {
  if (window.__bfInteractive) return
  window.__bfInteractive = true
  initImageSkeleton()
  // primeiro o catálogo: se a planilha estiver configurada, as vitrines
  // são reconstruídas ANTES de tudo que lê os produtos do DOM
  try {
    await initCatalog()
  } finally {
    // catálogo pronto (ou falhou p/ o plano B): tira o skeleton
    document.documentElement.classList.remove('bf-loading')
    document.documentElement.classList.add('bf-loaded')
  }
  initMessageTop()
  initCarousels()
  // antes do menu mobile: os submenus clonam links do header, que já
  // devem estar reapontados para as rotas internas
  initProductPage()
  initMenuMobile()
  initCookieBanner()
  initCart()
  initGlobalClose()
  initFooterAccordion()
  initSearch()
}

/* ------------------------------------------------------------------ */
/* Carrosséis                                                          */
/* ------------------------------------------------------------------ */
function enableArrows(el) {
  const prev = el.querySelector('.prev')
  const next = el.querySelector('.next')
  for (const [btn, icon] of [[prev, 'icon-arrow-left'], [next, 'icon-arrow-right']]) {
    if (btn && !btn.querySelector('.icon')) {
      btn.classList.remove('sf-hidden')
      btn.removeAttribute('aria-disabled')
      btn.insertAdjacentHTML('beforeend', `<i class="icon ${icon}"></i>`)
    }
  }
  return { prev, next }
}

// Barra de avisos do topo: a captura congelou o Swiper (slides com
// width:1351px fixo e um transform travado), então a barra não
// acompanhava a largura da tela nem girava. Reconstrói os slides limpos
// (mensagens únicas) e inicia um Swiper real, responsivo e em loop.
function initMessageTop() {
  const container = document.querySelector('.message-top .swiper-container')
  const wrapper = container?.querySelector('.swiper-wrapper')
  if (!wrapper) return
  const seen = new Set()
  const msgs = []
  wrapper.querySelectorAll('.swiper-slide a').forEach((a) => {
    const t = a.textContent.trim()
    if (t && !seen.has(t)) {
      seen.add(t)
      msgs.push(t)
    }
  })
  if (!msgs.length) return
  wrapper.style.cssText = '' // remove o transform congelado da captura
  wrapper.innerHTML = msgs
    .map((t) => `<div class="item swiper-slide"><a href="javascript:void(0)" aria-label="${t.replace(/"/g, '&quot;')}">${t}</a></div>`)
    .join('')
  new Swiper(container, {
    modules: [Autoplay],
    slidesPerView: 1,
    loop: msgs.length > 1,
    allowTouchMove: false,
    autoplay: msgs.length > 1 ? { delay: 4000, disableOnInteraction: false } : false,
  })
  // libera o carrossel: o CSS deixa de segurar só a 1ª mensagem
  container.closest('.message-top')?.classList.add('bf-ready')
}

function initCarousels() {
  // Vitrines de produtos: setas + arrastar (2 por tela no mobile, 4 no desktop,
  // conforme o slider_parameters original data-quantity-desktop/mobile)
  document.querySelectorAll('.section-showcase .list-product.swiper-container').forEach((el) => {
    el.classList.add('bf-carousel')
    const { prev, next } = enableArrows(el)
    new Swiper(el, {
      modules: [Navigation],
      slidesPerView: 2,
      spaceBetween: 8,
      breakpoints: { 768: { slidesPerView: 4, spaceBetween: 0 } },
      navigation: { prevEl: prev, nextEl: next },
      watchOverflow: true,
    })
  })

  // Categorias (buy-sizes): os slides estavam congelados em 190px fixos,
  // estourando no mobile e sangrando nas bordas em telas médias.
  const buySizes = document.querySelector('.buy-sizes .swiper-container')
  if (buySizes) {
    buySizes.classList.add('bf-carousel')
    const nav = enableArrows(buySizes)
    new Swiper(buySizes, {
      modules: [Navigation],
      slidesPerView: 2,
      spaceBetween: 12,
      breakpoints: {
        480: { slidesPerView: 3, spaceBetween: 16 },
        768: { slidesPerView: 4, spaceBetween: 20 },
        1024: { slidesPerView: 6, spaceBetween: 24 },
      },
      navigation: { prevEl: nav.prev, nextEl: nav.next },
      watchOverflow: true,
    })
  }

  // bolinhas de paginação (mostram que o carrossel continua)
  const addDots = (el) => {
    const dots = document.createElement('div')
    dots.className = 'swiper-pagination bf-dots'
    el.appendChild(dots)
    return dots
  }

  // Avaliações dos clientes: os cards estavam congelados em 416px;
  // vira carrossel de verdade com setas, autoplay, bolinhas e uma
  // "espiadinha" do próximo card no mobile
  const reviews = document.querySelector('.custom-home-reviews .swiper-container, [class*="reviews"] .swiper-container')
  if (reviews) {
    reviews.classList.add('bf-carousel')
    const nav = enableArrows(reviews.closest('[class*="reviews"]') || reviews)
    new Swiper(reviews, {
      modules: [Autoplay, Navigation, Pagination],
      slidesPerView: 1.12,
      spaceBetween: 12,
      breakpoints: { 768: { slidesPerView: 2, spaceBetween: 20 }, 1024: { slidesPerView: 3, spaceBetween: 20 } },
      loop: true,
      autoplay: { delay: 4500, disableOnInteraction: false, pauseOnMouseEnter: true },
      navigation: { prevEl: nav.prev, nextEl: nav.next },
      pagination: { el: addDots(reviews), clickable: true },
    })
  }

  // Instagram: espiadinha da próxima foto + bolinhas no mobile
  const insta = document.querySelector('.template-instagram .swiper-container')
  if (insta) {
    insta.classList.add('bf-carousel')
    new Swiper(insta, {
      modules: [Autoplay, Pagination],
      slidesPerView: 1.15,
      spaceBetween: 12,
      breakpoints: { 480: { slidesPerView: 2, spaceBetween: 18 }, 992: { slidesPerView: 4, spaceBetween: 25 } },
      loop: true,
      autoplay: { delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true },
      watchOverflow: true,
      pagination: { el: addDots(insta), clickable: true },
    })
  }

  // Marcas: esteira contínua em loop (pausa ao passar o mouse)
  const brands = document.querySelector('.brands-custom .swiper-container')
  if (brands) {
    brands.classList.add('bf-carousel')
    new Swiper(brands, {
      modules: [Autoplay, Navigation],
      slidesPerView: 2,
      spaceBetween: 30,
      breakpoints: { 768: { slidesPerView: 6, spaceBetween: 60 } },
      loop: true,
      speed: 4000,
      autoplay: { delay: 0, disableOnInteraction: false, pauseOnMouseEnter: true },
      navigation: {
        prevEl: document.querySelector('.brands-custom .prev'),
        nextEl: document.querySelector('.brands-custom .next'),
      },
    })
  }
}

/* ------------------------------------------------------------------ */
/* Menu mobile                                                         */
/* ------------------------------------------------------------------ */
function initMenuMobile() {
  const menu = document.getElementById('menu-mobile')
  if (!menu) return

  // Os submenus do menu mobile foram esvaziados pela captura (estavam
  // ocultos). O mega-menu do header tem o conteúdo completo — clonamos
  // os links de cada categoria correspondente.
  const headerCats = [...document.querySelectorAll('.header .nav .list > li.first-level')]
  const norm = (s) => s.trim().toLowerCase().replace(/\s+/g, ' ')
  menu.querySelectorAll('.nav-mobile > .list > li.sub').forEach((li) => {
    const link = li.querySelector(':scope > a')
    const sub = li.querySelector(':scope > ul.second-level')
    if (!link || !sub) return
    const name = norm(link.textContent)
    const match = headerCats.find((c) => {
      const n = c.querySelector('.name')
      return n && name.includes(norm(n.textContent))
    })
    const seen = new Set()
    const links = match
      ? [...match.querySelectorAll('.second-level a')]
          .filter((a) => {
            const key = a.textContent.trim().toLowerCase()
            if (!key || seen.has(key)) return false
            seen.add(key)
            return true
          })
          .slice(0, 24)
      : []
    if (!links.length) {
      link.querySelector('.icon-arrow-down')?.remove()
      return
    }
    sub.classList.remove('sf-hidden')
    sub.innerHTML = links
      .map((a) => `<li><a href="${a.getAttribute('href')}">${a.textContent.trim()}</a></li>`)
      .join('')
    link.addEventListener('click', (e) => {
      e.preventDefault()
      li.classList.toggle('bf-expanded')
    })
  })

  document.addEventListener('click', (e) => {
    if (e.target.closest('[data-target="#menu-mobile"], .bf-burger')) {
      openMenu()
    } else if (e.target.closest('.menu-mobile .close-box')) {
      closeMenu()
    } else if (e.target.closest('.menu-mobile a[href^="#/"]')) {
      // navegação interna (categoria/produto): fecha o drawer
      closeMenu()
    }
  })
}

function openMenu() {
  document.getElementById('menu-mobile')?.classList.add('bf-open')
  document.querySelector('.overlay-shadow')?.classList.add('bf-visible')
  document.body.classList.add('bf-no-scroll')
}

function closeMenu() {
  document.getElementById('menu-mobile')?.classList.remove('bf-open')
  if (!document.querySelector('.cart.bf-open')) {
    document.querySelector('.overlay-shadow')?.classList.remove('bf-visible')
    document.body.classList.remove('bf-no-scroll')
  }
}

/* ------------------------------------------------------------------ */
/* Cookie banner                                                       */
/* ------------------------------------------------------------------ */
function initCookieBanner() {
  const banner = document.querySelector('.cc-window')
  if (!banner) return
  if (localStorage.getItem('bf_cookie_consent')) {
    banner.classList.add('bf-hidden')
    return
  }
  banner.querySelector('.cc-dismiss')?.addEventListener('click', () => {
    localStorage.setItem('bf_cookie_consent', 'dismiss')
    banner.classList.add('bf-hiding')
    setTimeout(() => banner.classList.add('bf-hidden'), 1000)
  })
}

/* ------------------------------------------------------------------ */
/* Busca: o form do header era um endpoint morto da plataforma antiga; */
/* agora abre a página interna de resultados (#/busca/<termo>)         */
/* ------------------------------------------------------------------ */
function initSearch() {
  document.addEventListener('submit', (e) => {
    const form = e.target.closest('.header-search-wrapper, .bf-menu-search')
    if (!form) return
    e.preventDefault()
    const q = form.querySelector('input')?.value.trim()
    if (q) {
      location.hash = `#/busca/${encodeURIComponent(q)}`
      closeMenu()
    }
  })
}

/* ------------------------------------------------------------------ */
/* Footer: acordeão no mobile                                          */
/* ------------------------------------------------------------------ */
function initFooterAccordion() {
  document.querySelectorAll('.footer .box').forEach((box) => {
    const title = box.querySelector(':scope > .title')
    const overflow = box.querySelector(':scope > .overflow')
    if (!title || !overflow) return
    title.querySelector('.icon-arrow-down')?.classList.remove('sf-hidden')
    title.addEventListener('click', () => {
      if (window.innerWidth > 768) return
      box.classList.toggle('bf-expanded')
    })
  })
}

/* ------------------------------------------------------------------ */
/* Fechamento global (overlay e ESC)                                   */
/* ------------------------------------------------------------------ */
function initGlobalClose() {
  document.querySelector('.overlay-shadow')?.addEventListener('click', () => {
    closeMenu()
    closeCart()
  })
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMenu()
      closeCart()
    }
  })
}
