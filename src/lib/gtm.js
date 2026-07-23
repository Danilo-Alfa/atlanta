// Google Tag Manager.
// O ID do contêiner (GTM-XXXXXXX) vem de src/config.js. Vazio = desativado.
//
// O script só é injetado depois do evento load da página: o gtm.js disputa
// banda com o banner principal e derrubaria o LCP que a otimização de
// performance conquistou. O dataLayer existe desde o início, então nenhum
// evento se perde — fica na fila até o GTM carregar.
//
// Navegação interna (#/produto, #/categoria...) é SPA: para medir cada
// "página" no GTM, use o acionador embutido "Alteração no histórico"
// (History Change) em vez de "Visualização de página".
import { GTM_ID } from '../config.js'

export function initGtm() {
  if (!GTM_ID) return
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' })
  const inject = () => {
    const s = document.createElement('script')
    s.async = true
    s.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(GTM_ID)}`
    document.head.appendChild(s)
  }
  if (document.readyState === 'complete') inject()
  else window.addEventListener('load', inject, { once: true })
}
