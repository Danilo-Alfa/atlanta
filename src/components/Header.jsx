import { rawStyle } from '../lib/rawStyle'

export default function Header() {
  return (
    <header className="header">
      {"\n "}
      <div className="bg header-desktop">
        {"\n "}
        <div className="line flex align-center justify-between container">
          {"\n "}
          <div className="header-menu sf-hidden" data-toggle="overlay-shadow" data-target="#menu-mobile">
            {"\n \n \n \n "}
          </div>
          {"\n "}
          <a className="logo" href="/" title="BateForte Materiais para Construção">
            {"\n "}
            <img src="/assets/img-fb172cf24605.webp" alt="BateForte Materiais para Construção" width="222" height="36" />
            {"\n \n "}
            <h1 className="title-store sf-hidden">
              {"BateForte Materiais para Construção"}
            </h1>
            {"\n "}
          </a>
          {" \n "}
          <div className="search-move">
            {"\n "}
            <form className="header-search-wrapper" action="/loja/busca.php?loja=1018104" data-search="suggestion">
              {"\n \n "}
              <input className="input-search" placeholder="O que deseja procurar?" spellCheck="false" autoComplete="off" data-input="suggestion" type="text" name="palavra_busca" defaultValue="" />
              {"\n "}
              <button className="button-search" aria-label="Buscar">
                {"\n "}
                <i className="icon icon-search" />
                {"\n "}
              </button>
              {"\n "}
              <div className="suggestion is-hidden sf-hidden" data-container="suggestion" />
              {"\n"}
            </form>
            {" "}
          </div>
          {"\n "}
          <div className="header-right">
            {"\n "}
            <div className="contact flex align-center">
              {"\n "}
              <i className="contact-icon icon">
                {"\n "}
                <svg xmlns="http://www.w3.org/2000/svg" className="svg-icon" viewBox="0 0 1024 1024" version="1.1" fill="currentColor">
                  <path d="M512 947.106726c-239.915162 0-435.106726-195.191564-435.106726-435.106726S272.084838 76.893274 512 76.893274s435.106726 195.191564 435.106726 435.106726S751.915162 947.106726 512 947.106726zM512 111.019513c-221.1027 0-400.980487 179.877787-400.980487 400.980487s179.877787 400.980487 400.980487 400.980487 400.980487-179.877787 400.980487-400.980487S733.1027 111.019513 512 111.019513z" />
                  <path d="M481.170854 613.473089l-1.192152-15.524578c-3.577478-32.265868 7.178493-67.549465 37.060057-103.417371 26.888394-31.682583 41.829687-54.993498 41.829687-81.858356 0-30.513968-19.126616-50.808176-56.769958-51.392484-21.51092 0-45.430702 7.153934-60.370972 18.49319l-14.332427-37.619806c19.709901-14.356986 53.776787-23.944342 85.459371-23.944342 68.74264 0 99.816357 42.437531 99.816357 87.892793 0 40.636512-22.703071 69.934792-51.392484 104.001679-26.304086 31.049157-35.867906 57.378825-34.066887 87.843674l0.584308 15.524578L481.170854 613.472066zM468.030579 697.18056c0-22.143323 14.941294-37.667901 35.867906-37.667901 20.902052 0 35.259038 15.524578 35.259038 37.667901 0 20.926612-13.748119 37.035498-35.867906 37.035498C482.363006 734.216058 468.030579 718.107171 468.030579 697.18056z" />
                </svg>
                {"\n "}
              </i>
              {"\n "}
              <div className="contact-text">
                {"\n "}
                <span>
                  {"Precisa de Ajuda?"}
                </span>
                {"\n "}
                <strong>
                  {"Atendimento"}
                </strong>
                {"\n "}
              </div>
              {"\n "}
              <div className="header-wrapper flex align-center">
                {"\n "}
                <div className="header-wrapper__content flex flex-column">
                  {"\n "}
                  <div className="header-wrapper__item header-wrapper__item--whatsapp">
                    {"\n "}
                    <a href="https://api.whatsapp.com/send?phone=5511943259368" title="WhatsApp: (11) 94325-9368" target="_blank">
                      {"\n "}
                      <span>
                        <i className="icon icon-whatsapp v-align-middle" />
                        {"Whatsapp:"}
                      </span>
                      {"\n (11) 94325-9368\n "}
                    </a>
                    {"\n "}
                  </div>
                  {"\n \n \n \n "}
                  <div className="header-wrapper__item header-wrapper__item--email">
                    {"\n "}
                    <a href="mailto:" title="E-mail">
                      {"\n "}
                      <span>
                        <i className="icon icon-email v-align-middle" />
                        {"E-mail:"}
                      </span>
                      {""}
                    </a>
                    {"\n "}
                  </div>
                  {"\n "}
                  
                  {"\n "}
                </div>
                {"\n "}
              </div>
              {"\n "}
            </div>
            {"\n \n "}
            
            {"\n \n "}
            <a className="cart-toggle" href="javascript:void(0)" title="Carrinho">
              {"\n "}
              <i className="icon v-align-middle">
                {"\n "}
                <svg xmlns="http://www.w3.org/2000/svg" role="presentation" aria-hidden="true" viewBox="0 0 17 20" fill="currentColor">
                  {"\n "}
                  <path d="M0 20V4.995l1 .006v.015l4-.002V4c0-2.484 1.274-4 3.5-4C10.518 0 12 1.48 12 4v1.012l5-.003v.985H1V19h15V6.005h1V20H0zM11 4.49C11 2.267 10.507 1 8.5 1 6.5 1 6 2.27 6 4.49V5l5-.002V4.49z" fill="currentColor" />
                  {"\n "}
                </svg>
                {"\n "}
              </i>
              {"\n "}
              <span className="cart-quantity" data-cart="amount">
                {"0"}
              </span>
              {"\n "}
            </a>
            {"\n "}
          </div>
          {"\n "}
        </div>
        {"\n \n"}
        <nav className="nav">
          {"\n "}
          <div className="container">
            {"\n "}
            <ul className="list flex justify-between">
              {"\n \n "}
              <li className="first-level sub all-categories">
                {"\n "}
                <span role="button" title="Todas Categorias">
                  {"\n "}
                  <div className="category-image">
                    {"\n "}
                    <img className="lazyload loaded" alt="Todos os Departamentos" src="/assets/img-a0da2ec22bf6.webp" data-ll-status="loaded" />
                    {"\n "}
                  </div>
                  {"\n "}
                  <div className="name">
                    {"\n Todas Categorias\n "}
                  </div>
                  {"\n "}
                </span>
                {"\n "}
                <ul className="sub-list second-level">
                  {" \n "}
                  <ul className="wrapper-categories">
                    {"\n \n "}
                    <li className="sub">
                      {"\n "}
                      <a href="#/categoria/cimento" title="Cimento">
                        {"\n "}
                        <div className="category-image">
                          <img src="/assets/bf-icon-cimento.svg" alt="Cimento" width="20" height="20" />
                        </div>
                        {"\n Cimento\n "}
                      </a>
                      {"\n "}
                    </li>
                    {"\n \n "}
                    <li className="sub">
                      {"\n "}
                      <a href="#/categoria/areia" title="Areia">
                        {"\n "}
                        <div className="category-image">
                          <img src="/assets/bf-icon-areia.svg" alt="Areia" width="20" height="20" />
                        </div>
                        {"\n Areia\n "}
                      </a>
                      {"\n "}
                    </li>
                    {"\n \n "}
                    <li className="sub">
                      {"\n "}
                      <a href="#/categoria/ferro" title="Ferro">
                        {"\n "}
                        <div className="category-image">
                          <img src="/assets/bf-icon-ferro.svg" alt="Ferro" width="20" height="20" />
                        </div>
                        {"\n Ferro\n "}
                      </a>
                      {"\n "}
                    </li>
                    {"\n \n "}
                    <li className="sub">
                      {"\n "}
                      <a href="#/categoria/eletrica" title="Elétrica">
                        {"\n "}
                        <div className="category-image">
                          <img src="/assets/bf-icon-eletrica.svg" alt="Elétrica" width="20" height="20" />
                        </div>
                        {"\n Elétrica\n "}
                      </a>
                      {"\n "}
                    </li>
                    {"\n \n "}
                    <li className="sub">
                      {"\n "}
                      <a href="#/categoria/hidraulica" title="Hidráulica">
                        {"\n "}
                        <div className="category-image">
                          <img src="/assets/bf-icon-hidraulica.svg" alt="Hidráulica" width="20" height="20" />
                        </div>
                        {"\n Hidráulica\n "}
                      </a>
                      {"\n "}
                    </li>
                    {"\n \n "}
                    <li className="sub">
                      {"\n "}
                      <a href="#/categoria/telhas" title="Telhas">
                        {"\n "}
                        <div className="category-image">
                          <img src="/assets/bf-icon-telhas.svg" alt="Telhas" width="20" height="20" />
                        </div>
                        {"\n Telhas\n "}
                      </a>
                      {"\n "}
                    </li>
                    {"\n \n "}
                    <li className="sub">
                      {"\n "}
                      <a href="#/categoria/tintas" title="Tintas">
                        {"\n "}
                        <div className="category-image">
                          <img src="/assets/bf-icon-tintas.svg" alt="Tintas" width="20" height="20" />
                        </div>
                        {"\n Tintas\n "}
                      </a>
                      {"\n "}
                    </li>
                    {"\n \n "}
                  </ul>
                  {"\n "}
                </ul>
                {" \n \n "}
              </li>
              {"\n \n "}
              <li className="first-level">
                {"\n "}
                <a href="#/categoria/cimento" title="Cimento">
                  {"\n "}
                  <div className="category-image">
                    <img alt="Cimento" src="/assets/bf-icon-cimento.svg" width="20" height="20" />
                  </div>
                  {"\n "}
                  <div className="name">
                    {"\n Cimento\n "}
                  </div>
                  {"\n "}
                </a>
                {"\n "}
              </li>
              {"\n \n "}
              <li className="first-level">
                {"\n "}
                <a href="#/categoria/areia" title="Areia">
                  {"\n "}
                  <div className="category-image">
                    <img alt="Areia" src="/assets/bf-icon-areia.svg" width="20" height="20" />
                  </div>
                  {"\n "}
                  <div className="name">
                    {"\n Areia\n "}
                  </div>
                  {"\n "}
                </a>
                {"\n "}
              </li>
              {"\n \n "}
              <li className="first-level">
                {"\n "}
                <a href="#/categoria/ferro" title="Ferro">
                  {"\n "}
                  <div className="category-image">
                    <img alt="Ferro" src="/assets/bf-icon-ferro.svg" width="20" height="20" />
                  </div>
                  {"\n "}
                  <div className="name">
                    {"\n Ferro\n "}
                  </div>
                  {"\n "}
                </a>
                {"\n "}
              </li>
              {"\n \n "}
              <li className="first-level">
                {"\n "}
                <a href="#/categoria/eletrica" title="Elétrica">
                  {"\n "}
                  <div className="category-image">
                    <img alt="Elétrica" src="/assets/bf-icon-eletrica.svg" width="20" height="20" />
                  </div>
                  {"\n "}
                  <div className="name">
                    {"\n Elétrica\n "}
                  </div>
                  {"\n "}
                </a>
                {"\n "}
              </li>
              {"\n \n "}
              <li className="first-level">
                {"\n "}
                <a href="#/categoria/hidraulica" title="Hidráulica">
                  {"\n "}
                  <div className="category-image">
                    <img alt="Hidráulica" src="/assets/bf-icon-hidraulica.svg" width="20" height="20" />
                  </div>
                  {"\n "}
                  <div className="name">
                    {"\n Hidráulica\n "}
                  </div>
                  {"\n "}
                </a>
                {"\n "}
              </li>
              {"\n \n "}
              
              {"\n \n "}
              <li className="first-level">
                {"\n "}
                <a href="#/categoria/telhas" title="Telhas">
                  {"\n "}
                  <div className="category-image">
                    <img alt="Telhas" src="/assets/bf-icon-telhas.svg" width="20" height="20" />
                  </div>
                  {"\n "}
                  <div className="name">
                    {"\n Telhas\n "}
                  </div>
                  {"\n "}
                </a>
                {"\n "}
              </li>
              {"\n \n "}
              <li className="first-level">
                {"\n "}
                <a href="#/categoria/tintas" title="Tintas">
                  {"\n "}
                  <div className="category-image">
                    <img alt="Tintas" src="/assets/bf-icon-tintas.svg" width="20" height="20" />
                  </div>
                  {"\n "}
                  <div className="name">
                    {"\n Tintas\n "}
                  </div>
                  {"\n "}
                </a>
                {"\n "}
              </li>
              {"\n \n "}
              <li className="first-level categoria-offer">
                {"\n "}
                <a href="https://www.atlantanet.com.br/cimento" title="Ofertas Especiais">
                  {"\n "}
                  <div className="category-image">
                    {"\n "}
                    <img className="lazyload loaded" alt="Todas Categorias" src="/assets/img-4715e72ca586.webp" data-ll-status="loaded" />
                    {"\n "}
                  </div>
                  {"\n "}
                  <div className="name">
                    {"\n Ofertas Especiais\n "}
                  </div>
                  {"\n "}
                </a>
                {"\n "}
                <ul className="sub-list second-level">
                  {"\n "}
                  <div className="categoria-offer__products active-slide" data-countdown="12/05/2025 00:00:00">
                    {"\n \n "}
                    <div className="section-showcase show">
                      {"\n "}
                      <div className="container">
                        {"\n "}
                        <div className="list-product swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events">
                          {"\n "}
                          <div className="list-product__items flex swiper-wrapper" id="swiper-wrapper-5fb9360d3a4a801e" aria-live="polite">
                            {"\n "}
                            <div className="item swiper-slide swiper-slide-active" role="group" aria-label="1 / 12" ref={rawStyle("width:213.25px")}>
                              {"\n \n \n \n"}
                              <div className="product upon_request has-fast-shopping" id="product-2044329994" product-ref="32352">
                                {"\n \n "}
                                <div className="image">
                                  {"\n \n "}
                                  <a href="https://www.atlantanet.com.br/material-de-construcao/cimento-comum-argos-5-kg" className="space-image">
                                    {"\n "}
                                    <img loading="lazy" className="lazyload loaded" src="/assets/img-7aeadf11b955.webp" alt="Cimento Comum 5KG - Argos" data-ll-status="loaded" />
                                    {"\n \n "}
                                  </a>
                                  {"\n \n \n \n \n \n "}
                                  <div className="product-tags tags-custom sf-hidden" data-tags-count="0">
                                    {"\n \n \n \n \n "}
                                  </div>
                                  {"\n \n "}
                                </div>
                                {"\n "}
                                <a className="product-info" href="https://www.atlantanet.com.br/material-de-construcao/cimento-comum-argos-5-kg">
                                  {"\n "}
                                  <div className="wrapper-product-name">
                                    {"\n "}
                                    <div className="product-name">
                                      {"\n Cimento Comum 5KG - Argos\n "}
                                    </div>
                                    {"\n "}
                                  </div>
                                  {"\n "}
                                  <div className="product-price">
                                    {"\n \n \n "}
                                  </div>
                                  {"\n \n "}
                                </a>
                                {"\n \n \n \n \n "}
                                <div className="actions">
                                  {"\n "}
                                </div>
                                {"\n \n"}
                              </div>
                              {" "}
                            </div>
                            {"\n "}
                            <div className="item swiper-slide swiper-slide-next" role="group" aria-label="2 / 12" ref={rawStyle("width:213.25px")}>
                              {"\n \n \n \n"}
                              <div className="product upon_request has-fast-shopping" id="product-272140255" product-ref="27447">
                                {"\n \n "}
                                <div className="image">
                                  {"\n \n "}
                                  <a href="https://www.atlantanet.com.br/material-de-construcao/cimento-cp-iv-rs-32-50kg-caue" className="space-image">
                                    {"\n "}
                                    <img loading="lazy" className="lazyload loaded" src="/assets/img-3a2f50f59724.svg" alt="Cimento Exato CP IV 50KG - Cauê" data-ll-status="loaded" ref={rawStyle("background-blend-mode:normal!important;background-clip:content-box!important;background-position:50% 50%!important;background-color:rgba(0,0,0,0)!important;background-image:var(--sf-img-43)!important;background-size:contain!important;background-origin:content-box!important;background-repeat:no-repeat!important")} />
                                    {"\n \n "}
                                  </a>
                                  {"\n \n \n \n \n \n "}
                                  <div className="product-tags tags-custom sf-hidden" data-tags-count="0">
                                    {"\n \n \n \n \n "}
                                  </div>
                                  {"\n \n "}
                                </div>
                                {"\n "}
                                <a className="product-info" href="https://www.atlantanet.com.br/material-de-construcao/cimento-cp-iv-rs-32-50kg-caue">
                                  {"\n "}
                                  <div className="wrapper-product-name">
                                    {"\n "}
                                    <div className="product-name">
                                      {"\n Cimento Exato CP IV 50KG - Cauê\n "}
                                    </div>
                                    {"\n "}
                                  </div>
                                  {"\n "}
                                  <div className="product-price">
                                    {"\n \n \n "}
                                  </div>
                                  {"\n \n "}
                                </a>
                                {"\n \n \n \n \n "}
                                <div className="actions">
                                  {"\n "}
                                </div>
                                {"\n \n"}
                              </div>
                              {" "}
                            </div>
                            {"\n "}
                            <div className="item swiper-slide" role="group" aria-label="3 / 12" ref={rawStyle("width:213.25px")}>
                              {"\n \n \n \n"}
                              <div className="product upon_request has-fast-shopping" id="product-1681246913" product-ref="10009">
                                {"\n \n "}
                                <div className="image">
                                  {"\n \n "}
                                  <a href="https://www.atlantanet.com.br/material-de-construcao/cimento-todas-obras-50kg-cpii-votoran" className="space-image">
                                    {"\n "}
                                    <img loading="lazy" className="lazyload loaded" src="/assets/img-3a2f50f59724.svg" alt="Cimento Todas As Obras 50KG CPII - Votoran" data-ll-status="loaded" ref={rawStyle("background-blend-mode:normal!important;background-clip:content-box!important;background-position:50% 50%!important;background-color:rgba(0,0,0,0)!important;background-image:var(--sf-img-44)!important;background-size:contain!important;background-origin:content-box!important;background-repeat:no-repeat!important")} />
                                    {"\n \n "}
                                  </a>
                                  {"\n \n \n \n \n \n "}
                                  <div className="product-tags tags-custom sf-hidden" data-tags-count="0">
                                    {"\n \n \n \n \n "}
                                  </div>
                                  {"\n \n "}
                                </div>
                                {"\n "}
                                <a className="product-info" href="https://www.atlantanet.com.br/material-de-construcao/cimento-todas-obras-50kg-cpii-votoran">
                                  {"\n "}
                                  <div className="wrapper-product-name">
                                    {"\n "}
                                    <div className="product-name">
                                      {"\n Cimento Todas As Obras 50KG CPII - Votoran\n "}
                                    </div>
                                    {"\n "}
                                  </div>
                                  {"\n "}
                                  <div className="product-price">
                                    {"\n \n \n "}
                                  </div>
                                  {"\n \n "}
                                </a>
                                {"\n \n \n \n \n "}
                                <div className="actions">
                                  {"\n "}
                                </div>
                                {"\n \n"}
                              </div>
                              {" "}
                            </div>
                            {"\n "}
                            <div className="item swiper-slide" role="group" aria-label="4 / 12" ref={rawStyle("width:213.25px")}>
                              {"\n \n \n \n"}
                              <div className="product upon_request has-fast-shopping" id="product-569978587" product-ref="32353">
                                {"\n \n "}
                                <div className="image">
                                  {"\n \n "}
                                  <a href="https://www.atlantanet.com.br/material-de-construcao/cimento-comum-argos-10-kg" className="space-image">
                                    {"\n "}
                                    <img loading="lazy" className="lazyload loaded" src="/assets/img-0f054c5d4c70.webp" alt="Cimento Comum 10KG - Argos" data-ll-status="loaded" />
                                    {"\n \n "}
                                  </a>
                                  {"\n \n \n \n \n \n "}
                                  <div className="product-tags tags-custom sf-hidden" data-tags-count="0">
                                    {"\n \n \n \n \n "}
                                  </div>
                                  {"\n \n "}
                                </div>
                                {"\n "}
                                <a className="product-info" href="https://www.atlantanet.com.br/material-de-construcao/cimento-comum-argos-10-kg">
                                  {"\n "}
                                  <div className="wrapper-product-name">
                                    {"\n "}
                                    <div className="product-name">
                                      {"\n Cimento Comum 10KG - Argos\n "}
                                    </div>
                                    {"\n "}
                                  </div>
                                  {"\n "}
                                  <div className="product-price">
                                    {"\n \n \n "}
                                  </div>
                                  {"\n \n "}
                                </a>
                                {"\n \n \n \n \n "}
                                <div className="actions">
                                  {"\n "}
                                </div>
                                {"\n \n"}
                              </div>
                              {" "}
                            </div>
                            {"\n "}
                            <div className="item swiper-slide" role="group" aria-label="5 / 12" ref={rawStyle("width:213.25px")}>
                              {"\n \n \n \n"}
                              <div className="product upon_request has-fast-shopping" id="product-1199993375" product-ref="13998">
                                {"\n \n "}
                                <div className="image">
                                  {"\n \n "}
                                  <a href="https://www.atlantanet.com.br/material-de-construcao/cimento-estrutura-40kg-cpv-caue" className="space-image">
                                    {"\n "}
                                    <img loading="lazy" className="lazyload loaded" src="/assets/img-3a2f50f59724.svg" alt="Cimento Estrutura 40KG CP-V - Cauê" data-ll-status="loaded" ref={rawStyle("background-blend-mode:normal!important;background-clip:content-box!important;background-position:50% 50%!important;background-color:rgba(0,0,0,0)!important;background-image:var(--sf-img-46)!important;background-size:contain!important;background-origin:content-box!important;background-repeat:no-repeat!important")} />
                                    {"\n \n "}
                                  </a>
                                  {"\n \n \n \n \n \n "}
                                  <div className="product-tags tags-custom sf-hidden" data-tags-count="0">
                                    {"\n \n \n \n \n "}
                                  </div>
                                  {"\n \n "}
                                </div>
                                {"\n "}
                                <a className="product-info" href="https://www.atlantanet.com.br/material-de-construcao/cimento-estrutura-40kg-cpv-caue">
                                  {"\n "}
                                  <div className="wrapper-product-name">
                                    {"\n "}
                                    <div className="product-name">
                                      {"\n Cimento Estrutura 40KG CP-V - Cauê\n "}
                                    </div>
                                    {"\n "}
                                  </div>
                                  {"\n "}
                                  <div className="product-price">
                                    {"\n \n \n "}
                                  </div>
                                  {"\n \n "}
                                </a>
                                {"\n \n \n \n \n "}
                                <div className="actions">
                                  {"\n "}
                                </div>
                                {"\n \n"}
                              </div>
                              {" "}
                            </div>
                            {"\n "}
                            <div className="item swiper-slide" role="group" aria-label="6 / 12" ref={rawStyle("width:213.25px")}>
                              {"\n \n \n \n"}
                              <div className="product upon_request has-fast-shopping" id="product-1024339396" product-ref="22114">
                                {"\n \n "}
                                <div className="image">
                                  {"\n \n "}
                                  <a href="https://www.atlantanet.com.br/material-de-construcao/cimento-uso-geral-50kg-cpii-caue" className="space-image">
                                    {"\n "}
                                    <img loading="lazy" className="lazyload loaded" src="/assets/img-3a2f50f59724.svg" alt="Cimento Uso Geral 50 Kg CPII - Cauê" data-ll-status="loaded" ref={rawStyle("background-blend-mode:normal!important;background-clip:content-box!important;background-position:50% 50%!important;background-color:rgba(0,0,0,0)!important;background-image:var(--sf-img-47)!important;background-size:contain!important;background-origin:content-box!important;background-repeat:no-repeat!important")} />
                                    {"\n \n "}
                                  </a>
                                  {"\n \n \n \n \n \n "}
                                  <div className="product-tags tags-custom sf-hidden" data-tags-count="0">
                                    {"\n \n \n \n \n "}
                                  </div>
                                  {"\n \n "}
                                </div>
                                {"\n "}
                                <a className="product-info" href="https://www.atlantanet.com.br/material-de-construcao/cimento-uso-geral-50kg-cpii-caue">
                                  {"\n "}
                                  <div className="wrapper-product-name">
                                    {"\n "}
                                    <div className="product-name">
                                      {"\n Cimento Uso Geral 50 Kg CPII - Cauê\n "}
                                    </div>
                                    {"\n "}
                                  </div>
                                  {"\n "}
                                  <div className="product-price">
                                    {"\n \n \n "}
                                  </div>
                                  {"\n \n "}
                                </a>
                                {"\n \n \n \n \n "}
                                <div className="actions">
                                  {"\n "}
                                </div>
                                {"\n \n"}
                              </div>
                              {" "}
                            </div>
                            {"\n "}
                            <div className="item swiper-slide" role="group" aria-label="7 / 12" ref={rawStyle("width:213.25px")}>
                              {"\n \n \n \n"}
                              <div className="product upon_request has-fast-shopping" id="product-1984191342" product-ref="29298">
                                {"\n \n "}
                                <div className="image">
                                  {"\n \n "}
                                  <a href="https://www.atlantanet.com.br/material-de-construcao/cimento-branco-1kg-argos" className="space-image">
                                    {"\n "}
                                    <img loading="lazy" className="lazyload loaded" src="/assets/img-39813f94010e.webp" alt="Cimento Branco 1KG - Argos" data-ll-status="loaded" />
                                    {"\n \n "}
                                  </a>
                                  {"\n \n \n \n \n \n "}
                                  <div className="product-tags tags-custom sf-hidden" data-tags-count="0">
                                    {"\n \n \n \n \n "}
                                  </div>
                                  {"\n \n "}
                                </div>
                                {"\n "}
                                <a className="product-info" href="https://www.atlantanet.com.br/material-de-construcao/cimento-branco-1kg-argos">
                                  {"\n "}
                                  <div className="wrapper-product-name">
                                    {"\n "}
                                    <div className="product-name">
                                      {"\n Cimento Branco 1KG - Argos\n "}
                                    </div>
                                    {"\n "}
                                  </div>
                                  {"\n "}
                                  <div className="product-price">
                                    {"\n \n \n "}
                                  </div>
                                  {"\n \n "}
                                </a>
                                {"\n \n \n \n \n "}
                                <div className="actions">
                                  {"\n "}
                                </div>
                                {"\n \n"}
                              </div>
                              {" "}
                            </div>
                            {"\n "}
                            <div className="item swiper-slide" role="group" aria-label="8 / 12" ref={rawStyle("width:213.25px")}>
                              {"\n \n \n \n"}
                              <div className="product upon_request has-fast-shopping" id="product-1768586930" product-ref="30655">
                                {"\n \n "}
                                <div className="image">
                                  {"\n \n "}
                                  <a href="https://www.atlantanet.com.br/material-de-construcao/cimento-25kg-todas-obras-25kg-votoran" className="space-image">
                                    {"\n "}
                                    <img loading="lazy" className="lazyload loaded" src="/assets/img-c48dfc138d8a.webp" alt="Cimento Todas As Obras 25Kg - Votoran" data-ll-status="loaded" />
                                    {"\n \n "}
                                  </a>
                                  {"\n \n \n \n \n \n "}
                                  <div className="product-tags tags-custom" data-tags-count="1">
                                    {"\n "}
                                    <div className="tag new">
                                      {"\n "}
                                      <span className="tag-text">
                                        {"Lançamento"}
                                      </span>
                                      {"\n "}
                                    </div>
                                    {"\n \n \n \n \n "}
                                  </div>
                                  {"\n \n "}
                                </div>
                                {"\n "}
                                <a className="product-info" href="https://www.atlantanet.com.br/material-de-construcao/cimento-25kg-todas-obras-25kg-votoran">
                                  {"\n "}
                                  <div className="wrapper-product-name">
                                    {"\n "}
                                    <div className="product-name">
                                      {"\n Cimento Todas As Obras 25Kg - Votoran\n "}
                                    </div>
                                    {"\n "}
                                  </div>
                                  {"\n "}
                                  <div className="product-price">
                                    {"\n \n \n "}
                                  </div>
                                  {"\n \n "}
                                </a>
                                {"\n \n \n \n \n "}
                                <div className="actions">
                                  {"\n "}
                                </div>
                                {"\n \n"}
                              </div>
                              {" "}
                            </div>
                            {"\n "}
                            <div className="item swiper-slide" role="group" aria-label="9 / 12" ref={rawStyle("width:213.25px")}>
                              {"\n \n \n \n"}
                              <div className="product upon_request has-fast-shopping" id="product-1267204907" product-ref="ref-empty">
                                {"\n \n "}
                                <div className="image">
                                  {"\n \n "}
                                  <a href="https://www.atlantanet.com.br/argamassa-vitrine/cimento-25-kilos-cpii-e-32-rs-campeao" className="space-image">
                                    {"\n "}
                                    <img loading="lazy" className="lazyload loaded" src="/assets/img-96fc2cc8e51f.webp" alt="Cimento 25 Kilos CPII E-32 RS Campeão" data-ll-status="loaded" />
                                    {"\n \n "}
                                  </a>
                                  {"\n \n \n \n \n \n "}
                                  <div className="product-tags tags-custom" data-tags-count="1">
                                    {"\n "}
                                    <div className="tag new">
                                      {"\n "}
                                      <span className="tag-text">
                                        {"Lançamento"}
                                      </span>
                                      {"\n "}
                                    </div>
                                    {"\n \n \n \n \n "}
                                  </div>
                                  {"\n \n "}
                                </div>
                                {"\n "}
                                <a className="product-info" href="https://www.atlantanet.com.br/argamassa-vitrine/cimento-25-kilos-cpii-e-32-rs-campeao">
                                  {"\n "}
                                  <div className="wrapper-product-name">
                                    {"\n "}
                                    <div className="product-name">
                                      {"\n Cimento 25 Kilos CPII E-32 RS Campeão\n "}
                                    </div>
                                    {"\n "}
                                  </div>
                                  {"\n "}
                                  <div className="product-price">
                                    {"\n \n \n "}
                                  </div>
                                  {"\n \n "}
                                </a>
                                {"\n \n \n \n \n "}
                                <div className="actions">
                                  {"\n "}
                                </div>
                                {"\n \n"}
                              </div>
                              {" "}
                            </div>
                            {"\n "}
                            <div className="item swiper-slide" role="group" aria-label="10 / 12" ref={rawStyle("width:213.25px")}>
                              {"\n \n \n \n"}
                              <div className="product upon_request has-fast-shopping" id="product-639853865" product-ref="30706">
                                {"\n \n "}
                                <div className="image">
                                  {"\n \n "}
                                  <a href="https://www.atlantanet.com.br/material-de-construcao/cimento/cimento-nbr-asfalto-modificado-tipo-ii-25kg-viapol" className="space-image">
                                    {"\n "}
                                    <img loading="lazy" className="lazyload loaded" src="/assets/img-03be72518cf2.webp" alt="Cimento Asfáltico NBR 9910 Tipo II 25KG  - Viapol" data-ll-status="loaded" />
                                    {"\n \n "}
                                  </a>
                                  {"\n \n \n \n \n \n "}
                                  <div className="product-tags tags-custom sf-hidden" data-tags-count="0">
                                    {"\n \n \n \n \n "}
                                  </div>
                                  {"\n \n "}
                                </div>
                                {"\n "}
                                <a className="product-info" href="https://www.atlantanet.com.br/material-de-construcao/cimento/cimento-nbr-asfalto-modificado-tipo-ii-25kg-viapol">
                                  {"\n "}
                                  <div className="wrapper-product-name">
                                    {"\n "}
                                    <div className="product-name">
                                      {"\n Cimento Asfáltico NBR 9910 Tipo II 25KG - Viapol\n "}
                                    </div>
                                    {"\n "}
                                  </div>
                                  {"\n "}
                                  <div className="product-price">
                                    {"\n \n \n "}
                                  </div>
                                  {"\n \n "}
                                </a>
                                {"\n \n \n \n \n "}
                                <div className="actions">
                                  {"\n "}
                                </div>
                                {"\n \n"}
                              </div>
                              {" "}
                            </div>
                            {"\n "}
                            <div className="item swiper-slide" role="group" aria-label="11 / 12" ref={rawStyle("width:213.25px")}>
                              {"\n \n \n \n"}
                              <div className="product upon_request has-fast-shopping" id="product-1656490267" product-ref="ref-empty">
                                {"\n \n "}
                                <div className="image">
                                  {"\n \n "}
                                  <a href="https://www.atlantanet.com.br/argamassa-vitrine/cimento-de-secagem-ultra-rapida-seca-po-instantaneo-12kl" className="space-image">
                                    {"\n "}
                                    <img loading="lazy" className="lazyload loaded" src="/assets/img-709dc5ec5ee2.webp" alt="Cimento de secagem ultra rápida seca pó instantâneo 12KL" data-ll-status="loaded" />
                                    {"\n \n "}
                                  </a>
                                  {"\n \n \n \n \n \n "}
                                  <div className="product-tags tags-custom" data-tags-count="1">
                                    {"\n "}
                                    <div className="tag new">
                                      {"\n "}
                                      <span className="tag-text">
                                        {"Lançamento"}
                                      </span>
                                      {"\n "}
                                    </div>
                                    {"\n \n \n \n \n "}
                                  </div>
                                  {"\n \n "}
                                </div>
                                {"\n "}
                                <a className="product-info" href="https://www.atlantanet.com.br/argamassa-vitrine/cimento-de-secagem-ultra-rapida-seca-po-instantaneo-12kl">
                                  {"\n "}
                                  <div className="wrapper-product-name">
                                    {"\n "}
                                    <div className="product-name">
                                      {"\n Cimento de secagem ultra rápida seca pó instantâneo 12KL\n "}
                                    </div>
                                    {"\n "}
                                  </div>
                                  {"\n "}
                                  <div className="product-price">
                                    {"\n \n \n "}
                                  </div>
                                  {"\n \n "}
                                </a>
                                {"\n \n \n \n \n "}
                                <div className="actions">
                                  {"\n "}
                                </div>
                                {"\n \n"}
                              </div>
                              {" "}
                            </div>
                            {"\n "}
                            <div className="item swiper-slide" role="group" aria-label="12 / 12" ref={rawStyle("width:213.25px")}>
                              {"\n \n \n \n"}
                              <div className="product upon_request has-fast-shopping" id="product-2049843234" product-ref="29297">
                                {"\n \n "}
                                <div className="image">
                                  {"\n \n "}
                                  <a href="https://www.atlantanet.com.br/material-de-construcao/cimento-branco-estrututural-25kg-argos" className="space-image">
                                    {"\n "}
                                    <img loading="lazy" className="lazyload loaded" src="/assets/img-ed25d138688e.webp" alt="Cimento Branco Estrutural 25KG - Argos" data-ll-status="loaded" />
                                    {"\n \n "}
                                  </a>
                                  {"\n \n \n \n \n \n "}
                                  <div className="product-tags tags-custom" data-tags-count="1">
                                    {"\n "}
                                    <div className="tag new">
                                      {"\n "}
                                      <span className="tag-text">
                                        {"Lançamento"}
                                      </span>
                                      {"\n "}
                                    </div>
                                    {"\n \n \n \n \n "}
                                  </div>
                                  {"\n \n "}
                                </div>
                                {"\n "}
                                <a className="product-info" href="https://www.atlantanet.com.br/material-de-construcao/cimento-branco-estrututural-25kg-argos">
                                  {"\n "}
                                  <div className="wrapper-product-name">
                                    {"\n "}
                                    <div className="product-name">
                                      {"\n Cimento Branco Estrutural 25KG - Argos\n "}
                                    </div>
                                    {"\n "}
                                  </div>
                                  {"\n "}
                                  <div className="product-price">
                                    {"\n \n \n "}
                                  </div>
                                  {"\n \n "}
                                </a>
                                {"\n \n \n \n \n "}
                                <div className="actions">
                                  {"\n "}
                                </div>
                                {"\n \n"}
                              </div>
                              {" "}
                            </div>
                            {"\n \n \n "}
                          </div>
                          {"\n "}
                          <div className="prev swiper-button-disabled" tabIndex="-1" role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-5fb9360d3a4a801e" aria-disabled="true">
                            {"\n "}
                            <i className="icon icon-arrow-left" />
                            {"\n "}
                          </div>
                          {"\n "}
                          <div className="next" tabIndex="0" role="button" aria-label="Next slide" aria-controls="swiper-wrapper-5fb9360d3a4a801e" aria-disabled="false">
                            {"\n "}
                            <i className="icon icon-arrow-right" />
                            {"\n "}
                          </div>
                          {" \n "}
                          <span className="swiper-notification sf-hidden" aria-live="assertive" aria-atomic="true" />
                        </div>
                        {"\n \n "}
                      </div>
                      {"\n "}
                    </div>
                    {"\n "}
                  </div>
                  {"\n "}
                  <div className="categoria-offer__descriptions">
                    {"\n "}
                    <div className="categoria-offer__title">
                      {"\n "}
                      <strong>
                        {"Ofertas Imperdíveis!"}
                      </strong>
                      {"\n "}
                      <span>
                        {"Corre que já está acabandooo!!"}
                      </span>
                      {"\n "}
                    </div>
                    {"\n "}
                    <ul className="categoria-offer__countdown" />
                    {"\n "}
                    <a href="https://www.atlantanet.com.br/cimento" className="categoria-offer__button">
                      {"Ver todos os produtos"}
                    </a>
                    {"\n "}
                  </div>
                  {"\n "}
                </ul>
                {"\n "}
              </li>
              {"\n \n "}
            </ul>
            {"\n "}
          </div>
          {"\n"}
        </nav>
        {" "}
      </div>
      {"\n \n "}
      {/* Header mobile: o conteúdo original foi removido pela captura
          (estava oculto no desktop); recriado com a identidade do tema. */}
      <div className="bg header-mobile search-closed">
        <div className="bf-header-mobile">
          <button type="button" className="bf-burger" aria-label="Abrir menu" data-toggle="overlay-shadow" data-target="#menu-mobile">
            <span />
            <span />
            <span />
          </button>
          <a className="bf-logo-mobile" href="/" title="BateForte Materiais para Construção">
            <img src="/assets/img-fb172cf24605.webp" alt="BateForte Materiais para Construção" width="178" height="29" />
          </a>
          <a className="cart-toggle" href="javascript:void(0)" title="Carrinho">
            <svg xmlns="http://www.w3.org/2000/svg" role="presentation" aria-hidden="true" viewBox="0 0 17 20" fill="currentColor">
              <path d="M0 20V4.995l1 .006v.015l4-.002V4c0-2.484 1.274-4 3.5-4C10.518 0 12 1.48 12 4v1.012l5-.003v.985H1V19h15V6.005h1V20H0zM11 4.49C11 2.267 10.507 1 8.5 1 6.5 1 6 2.27 6 4.49V5l5-.002V4.49z" fill="currentColor" />
            </svg>
            <span className="cart-quantity" data-cart="amount">
              {"0"}
            </span>
          </a>
        </div>
      </div>
      {"\n"}
    </header>
  )
}
