// Camada de interatividade BateForte.
// O site é uma captura estática (SingleFile): o markup dos carrosséis,
// menu e carrinho existe, mas sem comportamento. Este módulo liga tudo
// manipulando o DOM estático diretamente (os componentes nunca
// re-renderizam, então não há conflito com o React).
import Swiper from 'swiper'
import { Autoplay, Navigation } from 'swiper/modules'
import { closeCart, initCart } from './cart.js'

export function initInteractive() {
  if (window.__bfInteractive) return
  window.__bfInteractive = true
  initCarousels()
  initMenuMobile()
  initCookieBanner()
  initCart()
  initGlobalClose()
}

/* ------------------------------------------------------------------ */
/* Carrosséis                                                          */
/* ------------------------------------------------------------------ */
function initCarousels() {
  // Vitrines de produtos: setas + arrastar (2 por tela no mobile, 4 no desktop,
  // conforme o slider_parameters original data-quantity-desktop/mobile)
  document.querySelectorAll('.section-showcase .list-product.swiper-container').forEach((el) => {
    el.classList.add('bf-carousel')
    const prev = el.querySelector('.prev')
    const next = el.querySelector('.next')
    for (const [btn, icon] of [[prev, 'icon-arrow-left'], [next, 'icon-arrow-right']]) {
      if (btn && !btn.querySelector('.icon')) {
        btn.classList.remove('sf-hidden')
        btn.removeAttribute('aria-disabled')
        btn.insertAdjacentHTML('beforeend', `<i class="icon ${icon}"></i>`)
      }
    }
    new Swiper(el, {
      modules: [Navigation],
      slidesPerView: 2,
      spaceBetween: 8,
      breakpoints: { 768: { slidesPerView: 4, spaceBetween: 0 } },
      navigation: { prevEl: prev, nextEl: next },
      watchOverflow: true,
    })
  })

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
