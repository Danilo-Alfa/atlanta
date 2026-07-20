export default function MessageTop() {
  // Marcado como estático/limpo: sem os slides duplicados nem os estilos
  // congelados da captura (width:1351px / transform travado), que faziam
  // a barra "piscar" torta no F5 antes do Swiper iniciar. Enquanto o JS
  // não liga o carrossel (.bf-ready), o CSS mostra só a 1ª mensagem
  // centralizada e ocupando a largura toda; depois o Swiper assume o loop.
  const mensagens = [
    'Parcelamos suas compras em até 3x sem juros',
    'Compre pelo whatsapp',
    'Loja especializada, mais de 20 anos no mercado.',
  ]
  return (
    <div className="message-top active-slide">
      {"\n "}
      <div className="swiper-container swiper-container-horizontal">
        {"\n "}
        <div className="swiper-wrapper message-top__content" aria-live="off">
          {mensagens.map((t) => (
            <div className="item swiper-slide" key={t} role="group">
              {"\n "}
              <a href="javascript:void(0)" aria-label={t}>
                {"\n "}{t}{"\n "}
              </a>
              {"\n "}
            </div>
          ))}
        </div>
        {"\n "}
        <div className="prev sf-hidden" tabIndex="0" role="button" aria-label="Previous slide" />
        {"\n "}
        <div className="next sf-hidden" tabIndex="0" role="button" aria-label="Next slide" />
        {"\n "}
        <div className="dots" />
        {"\n "}
        <span className="swiper-notification sf-hidden" aria-live="assertive" aria-atomic="true" />
      </div>
      {"\n"}
    </div>
  )
}
