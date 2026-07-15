import { rawStyle } from '../../lib/rawStyle'

export default function Instagram() {
  return (
    <div className="template-instagram not-slide-drag active-slide">
      {"\n "}
      <div className="section-header">
        {"\n "}
        <h2 className="title-section">
          {"\n "}
          <a href="https://www.instagram.com/atlanta_materiais/" target="_blank" rel="noopener noreferrer">
            {"\n Siga-nos no Instagram @atlanta_materiais\n "}
          </a>
          {"\n "}
        </h2>
        {"\n "}
      </div>
      {"\n \n \n "}
      <div className="container swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events">
        {"\n "}
        <div className="swiper-wrapper" id="instafeed" aria-live="off">
          {"\n \n \n "}
          <div className="item swiper-slide swiper-slide-active" role="group" aria-label="1 / 4" ref={rawStyle("width:303.75px;margin-right:25px")}>
            {"\n "}
            <a href="https://www.instagram.com/p/DJ_8vOBIUCC/" target="_blank" rel="noopener noreferrer">
              {"\n "}
              <div>
                {"\n "}
                <img loading="lazy" className="lazyload loaded" alt="Postagem do Instagram" src="/assets/img-a33168fee286.webp" data-ll-status="loaded" />
                {"\n "}
              </div>
              {"\n "}
            </a>
            {"\n "}
          </div>
          {"\n \n \n "}
          <div className="item swiper-slide swiper-slide-next" role="group" aria-label="2 / 4" ref={rawStyle("width:303.75px;margin-right:25px")}>
            {"\n "}
            <a href="https://www.instagram.com/p/DKw4aHOv5QW/" target="_blank" rel="noopener noreferrer">
              {"\n "}
              <div>
                {"\n "}
                <img loading="lazy" className="lazyload loaded" alt="Postagem do Instagram" src="/assets/img-57373056cbc2.webp" data-ll-status="loaded" />
                {"\n "}
              </div>
              {"\n "}
            </a>
            {"\n "}
          </div>
          {"\n \n \n "}
          <div className="item swiper-slide" role="group" aria-label="3 / 4" ref={rawStyle("width:303.75px;margin-right:25px")}>
            {"\n "}
            <a href="https://www.instagram.com/p/DJkR1J9O_Ck/" target="_blank" rel="noopener noreferrer">
              {"\n "}
              <div>
                {"\n "}
                <img loading="lazy" className="lazyload loaded" alt="Postagem do Instagram" src="/assets/img-734b73c0449b.webp" data-ll-status="loaded" />
                {"\n "}
              </div>
              {"\n "}
            </a>
            {"\n "}
          </div>
          {"\n \n \n "}
          <div className="item swiper-slide" role="group" aria-label="4 / 4" ref={rawStyle("width:303.75px;margin-right:25px")}>
            {"\n "}
            <a href="https://www.instagram.com/p/DKZjjXMIrEb/" target="_blank" rel="noopener noreferrer">
              {"\n "}
              <div>
                {"\n "}
                <img loading="lazy" className="lazyload loaded" alt="Postagem do Instagram" src="/assets/img-d6690144e70d.webp" data-ll-status="loaded" />
                {"\n "}
              </div>
              {"\n "}
            </a>
            {"\n "}
          </div>
          {"\n \n \n \n \n \n \n \n \n "}
        </div>
        {"\n "}
        <div className="prev swiper-button-disabled sf-hidden" tabIndex="-1" role="button" aria-label="Previous slide" aria-controls="instafeed" aria-disabled="true">
          {"\n \n "}
        </div>
        {"\n "}
        <div className="next swiper-button-disabled sf-hidden" tabIndex="-1" role="button" aria-label="Next slide" aria-controls="instafeed" aria-disabled="true">
          {"\n \n "}
        </div>
        {"\n "}
        <div className="dots swiper-pagination-clickable swiper-pagination-bullets sf-hidden" />
        {"\n "}
        <span className="swiper-notification sf-hidden" aria-live="assertive" aria-atomic="true" />
      </div>
      {"\n \n"}
    </div>
  )
}
