import { rawStyle } from '../../lib/rawStyle'

export default function MiniBanners() {
  // Fileira de 3 destaques logo após "Navegue por Categorias".
  // Artes da loja; cada uma leva ao departamento correspondente.
  const banners = [
    { img: '/assets/img-promo-cimento.webp', href: '#/categoria/cimento', alt: 'Cimento com preços exclusivos' },
    { img: '/assets/img-promo-impermeabilizantes.webp', href: '#/categoria/impermeabilizantes', alt: 'Impermeabilizantes' },
    { img: '/assets/img-promo-tintas.webp', href: '#/categoria/tintas', alt: 'Tintas e Acessórios' },
  ]
  return (
    <div className="banners-grid mini-banners group-native-banners">
      {"\n "}
      <div className="container flex f-wrap justify-between">
        {banners.map((b) => (
          <div className="item" key={b.href}>
            <a href={b.href} className="item-image" aria-label={b.alt} ref={rawStyle('--padding:115.38461538462%')}>
              <img loading="lazy" src={b.img} alt={b.alt} width="416" height="480" />
            </a>
          </div>
        ))}
      </div>
      {"\n "}
    </div>
  )
}
