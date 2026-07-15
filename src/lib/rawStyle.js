// Aplica um style inline EXATAMENTE como no HTML original.
// Necessario porque objetos `style` do React nao suportam `!important`
// nem preservam a ordem/valores literais (ex.: transform capturado do
// carrossel, background-image via var(--sf-img-N)!important etc.).
// Usamos um callback ref que escreve o cssText cru, mantendo a fidelidade visual.
export const rawStyle = (cssText) => (el) => {
  if (el) el.style.cssText = cssText
}
