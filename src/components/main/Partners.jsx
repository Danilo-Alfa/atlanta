export default function Partners() {
  // Quadro de marcas parceiras (arte da loja): versão larga no desktop e
  // uma vertical dedicada no mobile, via <picture>.
  return (
    <div className="template-partners">
      {"\n "}
      <div className="section-header">
        {"\n "}
        <h2 className="title-section">{"Nossos Parceiros"}</h2>
        {"\n "}
      </div>
      {"\n "}
      <div className="container">
        {"\n "}
        <picture className="bf-partners-img">
          <source media="(max-width: 768px)" srcSet="/assets/img-parceiros-mobile.webp" />
          <img loading="lazy" src="/assets/img-parceiros-pc.webp" alt="Marcas parceiras da BateForte" width="1376" height="768" />
        </picture>
        {"\n "}
        <div className="bf-choose-brand">
          {"\n "}
          <h3 className="bf-choose-brand__title">{"Escolha pela marca"}</h3>
          {"\n "}
          <ul className="bf-brand-links" />
          {"\n "}
        </div>
        {"\n "}
      </div>
      {"\n"}
    </div>
  )
}
