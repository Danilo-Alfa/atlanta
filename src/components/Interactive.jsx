import { useEffect } from 'react'

// Monta a camada de interatividade (carrosséis, menu, cookie, carrinho)
// depois que todo o markup estático está no DOM. O import dinâmico tira
// Swiper/catálogo/checkout do bundle inicial: o primeiro paint só precisa
// do markup estático.
export default function Interactive() {
  useEffect(() => {
    import('../lib/interactive.js').then((m) => m.initInteractive())
  }, [])
  return null
}
