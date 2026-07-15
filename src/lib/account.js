// Conta do cliente (local, sem servidor).
// Os botões "Minha Conta / Entrar / Cadastrar" apontavam para o login da
// loja antiga. Aqui viram uma página interna (#/conta) com cadastro e
// login guardados no localStorage do navegador — uma conta de
// demonstração até existir um backend real.
const USER_KEY = 'bf_user'
const SESSION_KEY = 'bf_session'

function esc(s) {
  const d = document.createElement('div')
  d.textContent = s || ''
  return d.innerHTML
}

function getUser() {
  try {
    return JSON.parse(localStorage.getItem(USER_KEY))
  } catch {
    return null
  }
}

export function currentUser() {
  const u = getUser()
  return u && localStorage.getItem(SESSION_KEY) === u.email ? u : null
}

export function renderAccountPage(host) {
  const user = currentUser()
  host.innerHTML = user ? loggedView(user) : guestView()
  document.title = 'Minha Conta - BateForte Materiais para Construção & Madeireira'
}

function guestView() {
  return `
    <div class="container">
      <nav class="bf-pdp__breadcrumb">
        <a href="#" data-bf-close-pdp>Início</a><span> / </span><strong>Minha Conta</strong>
      </nav>
      <div class="section-header"><h2 class="title-section">Minha Conta</h2></div>
      <div class="bf-account__grid">
        <form class="bf-account__card" data-bf-form="login" novalidate>
          <h3>Já sou cliente</h3>
          <label>E-mail <input type="email" name="email" required placeholder="seu@email.com"></label>
          <label>Senha <input type="password" name="pass" required placeholder="Sua senha"></label>
          <p class="bf-account__error" hidden></p>
          <button type="submit" class="bf-account__btn">Entrar</button>
        </form>
        <form class="bf-account__card" data-bf-form="register" novalidate>
          <h3>Criar conta</h3>
          <label>Nome <input type="text" name="name" required placeholder="Seu nome"></label>
          <label>E-mail <input type="email" name="email" required placeholder="seu@email.com"></label>
          <label>Senha <input type="password" name="pass" required minlength="4" placeholder="Crie uma senha"></label>
          <p class="bf-account__error" hidden></p>
          <button type="submit" class="bf-account__btn">Cadastrar</button>
        </form>
      </div>
      <p class="bf-account__note">Conta local de demonstração: os dados ficam somente neste navegador.</p>
    </div>`
}

function loggedView(user) {
  return `
    <div class="container">
      <nav class="bf-pdp__breadcrumb">
        <a href="#" data-bf-close-pdp>Início</a><span> / </span><strong>Minha Conta</strong>
      </nav>
      <div class="section-header"><h2 class="title-section">Olá, ${esc(user.name.split(' ')[0])}!</h2></div>
      <div class="bf-account__card bf-account__card--single">
        <p class="bf-account__email">${esc(user.email)}</p>
        <div class="bf-account__actions">
          <button type="button" class="bf-account__btn" data-bf-open-cart>Meu carrinho</button>
          <a class="bf-account__btn bf-account__btn--whats" href="https://wa.me/5511933777529?text=${encodeURIComponent(`Olá! Sou ${user.name} e gostaria de acompanhar meu pedido.`)}" target="_blank" rel="noopener noreferrer">Meus pedidos (WhatsApp)</a>
          <button type="button" class="bf-account__btn bf-account__btn--ghost" data-bf-logout>Sair da conta</button>
        </div>
      </div>
    </div>`
}

// Atualiza os rótulos de conta no header desktop e no menu mobile
export function updateAccountUI() {
  const user = currentUser()
  const headerSpan = document.querySelector('.header-desktop .account-text > span')
  const headerLink = document.querySelector('.header-desktop .account-text .login-links a')
  if (headerSpan) headerSpan.textContent = user ? `Olá, ${user.name.split(' ')[0]}` : 'Minha Conta'
  if (headerLink) headerLink.textContent = user ? 'Ver conta' : 'Acessar'

  const mob = document.querySelector('.menu-mobile [data-logged-user="false"]')
  if (mob) {
    mob.querySelector(':scope > span').textContent = user ? `Olá, ${user.name.split(' ')[0]}` : 'Minha Conta'
    mob.querySelector('.login-links').innerHTML = user
      ? '<a href="#/conta">Ver conta</a> <span>/</span> <a href="#/conta" data-bf-logout>Sair</a>'
      : '<a href="#/conta" title="Entrar">Entrar</a> <span>/</span> <a href="#/conta" title="Cadastrar">Cadastrar</a>'
  }
}

export function initAccount(rerender) {
  document.addEventListener('submit', (e) => {
    const form = e.target.closest('[data-bf-form]')
    if (!form) return
    e.preventDefault()
    const kind = form.dataset.bfForm
    const data = Object.fromEntries(new FormData(form))
    const errEl = form.querySelector('.bf-account__error')
    const fail = (msg) => {
      errEl.textContent = msg
      errEl.hidden = false
    }
    if (!data.email || !data.pass || (kind === 'register' && !data.name)) {
      return fail('Preencha todos os campos.')
    }
    if (kind === 'register') {
      localStorage.setItem(USER_KEY, JSON.stringify({ name: data.name.trim(), email: data.email.trim().toLowerCase(), pass: btoa(data.pass) }))
      localStorage.setItem(SESSION_KEY, data.email.trim().toLowerCase())
    } else {
      const u = getUser()
      if (!u || u.email !== data.email.trim().toLowerCase() || u.pass !== btoa(data.pass)) {
        return fail('E-mail ou senha não conferem. Se ainda não tem conta, cadastre-se ao lado.')
      }
      localStorage.setItem(SESSION_KEY, u.email)
    }
    updateAccountUI()
    rerender()
  })

  document.addEventListener('click', (e) => {
    if (e.target.closest('[data-bf-logout]')) {
      e.preventDefault()
      localStorage.removeItem(SESSION_KEY)
      updateAccountUI()
      rerender()
    }
  })

  updateAccountUI()
}
