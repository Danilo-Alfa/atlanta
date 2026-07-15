// Carrinho funcional BateForte.
// Os produtos da loja são "sob consulta" (sem preço no markup), então o
// fechamento do pedido segue o fluxo natural da loja: WhatsApp com a lista
// de itens. Estado persistido em localStorage; o DOM do carrinho é estático
// (nunca re-renderizado pelo React), então manipulá-lo direto é seguro.
const STORAGE_KEY = 'bf_cart'
const WHATSAPP = '5511933777529'

let items = load()

function load() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []
  } catch {
    return []
  }
}

function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
}

function esc(s) {
  const d = document.createElement('div')
  d.textContent = s
  return d.innerHTML
}

export function addItem({ id, ref, name, img, href }, qty = 1) {
  const found = items.find((i) => i.id === id)
  if (found) found.qty += qty
  else items.push({ id, ref, name, img, href, qty })
  save()
  render()
}

export function initCart() {
  const cartEl = document.querySelector('.cart')
  if (!cartEl) return

  // botão "Adicionar ao carrinho" em cada produto (o div .actions existe vazio)
  document.querySelectorAll('.product').forEach((p) => {
    const actions = p.querySelector('.actions')
    if (!actions || actions.querySelector('.bf-add-cart')) return
    const btn = document.createElement('button')
    btn.type = 'button'
    btn.className = 'bf-add-cart'
    btn.textContent = 'Adicionar ao carrinho'
    actions.appendChild(btn)
  })

  document.addEventListener('click', (e) => {
    const add = e.target.closest('.bf-add-cart')
    if (add) {
      const p = add.closest('.product')
      addItem({
        id: p.id || p.querySelector('.product-name')?.textContent.trim(),
        ref: (p.getAttribute('product-ref') || '').replace('ref-empty', ''),
        name: p.querySelector('.product-name')?.textContent.trim() || 'Produto',
        img: p.querySelector('.image img')?.getAttribute('src') || '',
        href: p.querySelector('.product-info')?.getAttribute('href') || '',
      })
      openCart()
      return
    }
    if (e.target.closest('.cart-toggle')) {
      e.preventDefault()
      openCart()
      return
    }
    if (e.target.closest('.cart__vue__icon') || e.target.closest('.cart-backdrop')) {
      closeCart()
      return
    }
    const qtyBtn = e.target.closest('[data-bf-qty]')
    if (qtyBtn) {
      const it = items.find((i) => i.id === qtyBtn.dataset.bfId)
      if (it) {
        it.qty += Number(qtyBtn.dataset.bfQty)
        if (it.qty <= 0) items = items.filter((i) => i !== it)
        save()
        render()
      }
      return
    }
    const rm = e.target.closest('[data-bf-remove]')
    if (rm) {
      items = items.filter((i) => i.id !== rm.dataset.bfRemove)
      save()
      render()
      return
    }
    if (e.target.closest('.bf-cart-clear')) {
      items = []
      save()
      render()
      return
    }
    if (e.target.closest('.bf-cart-checkout')) {
      const lines = items.map((i) => `- ${i.qty}x ${i.name}${i.ref ? ` (Ref: ${i.ref})` : ''}`)
      const msg = `Olá! Quero fazer um pedido:\n${lines.join('\n')}`
      window.open(`https://api.whatsapp.com/send?phone=${WHATSAPP}&text=${encodeURIComponent(msg)}`, '_blank')
    }
  })

  render()
}

export function openCart() {
  document.querySelector('.cart')?.classList.add('bf-open')
  document.querySelector('.overlay-shadow')?.classList.add('bf-visible')
  document.body.classList.add('bf-no-scroll')
}

export function closeCart() {
  document.querySelector('.cart')?.classList.remove('bf-open')
  if (!document.querySelector('.menu-mobile.bf-open')) {
    document.querySelector('.overlay-shadow')?.classList.remove('bf-visible')
    document.body.classList.remove('bf-no-scroll')
  }
}

function render() {
  const count = items.reduce((n, i) => n + i.qty, 0)
  document.querySelectorAll('[data-cart="amount"]').forEach((el) => {
    el.textContent = String(count)
  })

  const content = document.querySelector('.cart .dropdown__content')
  const footer = document.querySelector('.cart .dropdown__footer')
  if (!content || !footer) return

  if (!items.length) {
    content.innerHTML = '<div class="cart__empty"><p>\n Seu carrinho está vazio.\n </p></div>'
    footer.innerHTML = '<p>Adicione produtos ao carrinho e eles aparecerão aqui.</p>'
    return
  }

  content.innerHTML = `<ul class="bf-cart-list">${items
    .map(
      (i) => `
    <li class="bf-cart-item">
      ${i.img ? `<img src="${esc(i.img)}" alt="">` : ''}
      <div class="bf-cart-item__info">
        <a class="bf-cart-item__name" href="${esc(i.href)}">${esc(i.name)}</a>
        <span class="bf-cart-item__price">Preço sob consulta</span>
        <div class="bf-cart-item__qty">
          <button type="button" data-bf-qty="-1" data-bf-id="${esc(i.id)}" aria-label="Diminuir">−</button>
          <span>${i.qty}</span>
          <button type="button" data-bf-qty="1" data-bf-id="${esc(i.id)}" aria-label="Aumentar">+</button>
        </div>
      </div>
      <button type="button" class="bf-cart-item__remove" data-bf-remove="${esc(i.id)}" aria-label="Remover">×</button>
    </li>`
    )
    .join('')}</ul>`

  footer.innerHTML = `
    <p class="bf-cart-summary">${count} ${count === 1 ? 'item' : 'itens'} no carrinho — preços confirmados no atendimento.</p>
    <button type="button" class="bf-cart-checkout">Finalizar pelo WhatsApp</button>
    <button type="button" class="bf-cart-clear">Limpar carrinho</button>`
}
