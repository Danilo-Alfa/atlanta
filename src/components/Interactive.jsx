import { useEffect } from 'react'
import { initInteractive } from '../lib/interactive.js'

// Monta a camada de interatividade (carrosséis, menu, cookie, carrinho)
// depois que todo o markup estático está no DOM.
export default function Interactive() {
  useEffect(() => {
    initInteractive()
  }, [])
  return null
}
