export default function Partners() {
  // Marcas que a loja realmente trabalha (extraídas do catálogo + banners).
  // Um card por marca; dá pra trocar por logos depois, se o cliente enviar.
  const marcas = [
    'Sika', 'Coral', 'Suvinil', 'Viapol', 'Tigre', 'Amanco',
    'Krona', 'Tramontina', 'Tekbond', 'Lorenzetti', 'Cortag', 'Quartzolit',
    'Fame', 'Zagonel', 'Vedacit', 'Fortlev', 'Votorantim', 'Deca',
    'Astra', 'Mundial', 'Castor', 'Pulvitec', 'Onduline', 'Brasilit',
    'Argos', 'Cauê', 'CSN', 'Pedrasil', 'Tec Brasil', 'Minasul',
  ]
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
        <ul className="bf-partners-grid">
          {marcas.map((m) => (
            <li className="bf-partner" key={m}>{m}</li>
          ))}
        </ul>
        {"\n "}
      </div>
      {"\n"}
    </div>
  )
}
