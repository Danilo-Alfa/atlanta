export default function MenuMobile() {
  return (
    <div id="menu-mobile" className="menu-mobile">
      {"\n "}
      <div className="close-box close-overlay">
        {"\n "}
        <i className="icon icon-times" />
        {"\n "}
      </div>
      {"\n "}
      <div className="block-title flex align-center">
        {"\n "}
        <div className="header-menu sf-hidden">
          {"\n \n \n \n "}
        </div>
        {"\n Menu\n "}
      </div>
      {"\n "}
      <div className="nav-mobile-wrapper">
        {"\n "}
        <nav className="nav-mobile">
          {" \n "}
          <ul className="list first-level">
            {"\n \n "}
            <li>
              {"\n "}
              <a href="#/categoria/cimento">
                {"\n "}
                <div className="category-image">
                  <img src="/assets/bf-icon-cimento.svg" alt="Cimento" width="20" height="20" />
                </div>
                {"\n Cimento\n "}
              </a>
              {"\n "}
            </li>
            {"\n \n "}
            <li>
              {"\n "}
              <a href="#/categoria/areia">
                {"\n "}
                <div className="category-image">
                  <img src="/assets/bf-icon-areia.svg" alt="Areia" width="20" height="20" />
                </div>
                {"\n Areia\n "}
              </a>
              {"\n "}
            </li>
            {"\n \n "}
            <li>
              {"\n "}
              <a href="#/categoria/ferro">
                {"\n "}
                <div className="category-image">
                  <img src="/assets/bf-icon-ferro.svg" alt="Ferro" width="20" height="20" />
                </div>
                {"\n Ferro\n "}
              </a>
              {"\n "}
            </li>
            {"\n \n "}
            <li>
              {"\n "}
              <a href="#/categoria/eletrica">
                {"\n "}
                <div className="category-image">
                  <img src="/assets/bf-icon-eletrica.svg" alt="Elétrica" width="20" height="20" />
                </div>
                {"\n Elétrica\n "}
              </a>
              {"\n "}
            </li>
            {"\n \n "}
            <li>
              {"\n "}
              <a href="#/categoria/hidraulica">
                {"\n "}
                <div className="category-image">
                  <img src="/assets/bf-icon-hidraulica.svg" alt="Hidráulica" width="20" height="20" />
                </div>
                {"\n Hidráulica\n "}
              </a>
              {"\n "}
            </li>
            {"\n \n "}
            <li>
              {"\n "}
              <a href="#/categoria/madeiras">
                {"\n "}
                <div className="category-image">
                  <img src="/assets/bf-icon-madeiras.svg" alt="Madeiras" width="20" height="20" />
                </div>
                {"\n Madeiras\n "}
              </a>
              {"\n "}
            </li>
            {"\n \n "}
            <li>
              {"\n "}
              <a href="#/categoria/telhas">
                {"\n "}
                <div className="category-image">
                  <img src="/assets/bf-icon-telhas.svg" alt="Telhas" width="20" height="20" />
                </div>
                {"\n Telhas\n "}
              </a>
              {"\n "}
            </li>
            {"\n \n "}
            <li>
              {"\n "}
              <a href="#/categoria/tintas">
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
          {" \n "}
        </nav>
        {"\n "}
      </div>
      {"\n "}
      <div className="menu-mobile-actions">
        {"\n "}
        <div className="account flex align-center">
          {"\n \n "}
          <i className="account-icon icon icon-login" />
          {"\n \n "}
          <div data-logged-user="false">
            {"\n "}
            <span>
              {"Minha Conta"}
            </span>
            {"\n "}
            <div className="login-links">
              {"\n "}
              <a href="#/conta" title="Entrar">
                {"Entrar"}
              </a>
              {"\n "}
              <span>
                {"/"}
              </span>
              {"\n "}
              <a href="#/conta" title="Cadastrar">
                {"Cadastrar"}
              </a>
              {"\n "}
            </div>
            {"\n "}
          </div>
          {" \n \n "}
          <div className="tray-hide sf-hidden" data-logged-user="true">
            {"\n \n \n "}
          </div>
          {"\n \n "}
        </div>
        {"\n "}
        <ul className="menu-actions-mobile__contact">
          {"\n "}
          <li className="wpp-mobile hidden sf-hidden">
            {"\n \n \n \n \n \n \n "}
          </li>
          {"\n \n "}
          <li className="hidden sf-hidden">
            {"\n \n "}
          </li>
          {"\n \n "}
          <li className="email-menu-mobile">
            {"\n "}
            <a href="mailto:contato@bateforte.com.br" title="Email: contato@bateforte.com.br">
              {"\n "}
              <i className="icon icon-email v-align-middle" />
              {"\n E-mail:\n "}
              <span>
                {"contato@bateforte.com.br"}
              </span>
              {"\n "}
            </a>
            {"\n "}
          </li>
          {"\n "}
          <li>
            {"\n "}
            <div className="header-wrapper__item header-wrapper__item--truck">
              {"\n "}
              <div className="header-wrapper__text">
                {"\n "}
                <span>
                  <i className="icon icon-truck" />
                </span>
                {"\n Rastrear Pedido\n "}
              </div>
              {"\n "}
              <div className="header-wrapper__form" url-shipping="https://rastreamentocorreios.info/consulta/">
                {"\n "}
                <input type="text" placeholder="Código de rastreio" defaultValue="" />
                {"\n "}
                <div className="header-wrapper__button">
                  <i className="icon icon-search" />
                </div>
                {"\n "}
              </div>
              {"\n "}
            </div>
            {"\n "}
          </li>
          {"\n "}
        </ul>
        {"\n "}
      </div>
      {"\n"}
    </div>
  )
}
