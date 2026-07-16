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
      {/* busca no menu mobile (o header mobile recriado não tem campo de busca) */}
      <form className="bf-menu-search" action="#">
        <input type="search" placeholder="O que deseja procurar?" aria-label="Buscar produtos" />
        <button type="submit" aria-label="Buscar">
          <i className="icon icon-search" />
        </button>
      </form>
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
          
          {"\n "}
          
          {"\n "}
        </ul>
        {"\n "}
      </div>
      {"\n"}
    </div>
  )
}
