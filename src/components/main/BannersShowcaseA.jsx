export default function BannersShowcaseA() {
  // Faixa de destaques promocionais (banners verticais da loja).
  // Cada um leva ao departamento correspondente.
  const promos = [
    { img: '/assets/img-promo-impermeabilizantes.webp', href: '#/categoria/impermeabilizantes', alt: 'Impermeabilizantes' },
    { img: '/assets/img-promo-tintas.webp', href: '#/categoria/tintas', alt: 'Tintas e Acessórios' },
    { img: '/assets/img-promo-cimento.webp', href: '#/categoria/cimento', alt: 'Cimento com preços exclusivos' },
  ]
  return (
    <div className="banners-grid banners-showcase group-native-banners bf-promo-row">
      {"\n "}
      <div className="container">
        {promos.map((p) => (
          <a key={p.href} className="bf-promo" href={p.href} aria-label={p.alt}>
            <img loading="lazy" src={p.img} alt={p.alt} width="1170" height="1360" />
          </a>
        ))}
      </div>
      {"\n "}
    </div>
  )
}
