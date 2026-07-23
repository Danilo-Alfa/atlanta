import { rawStyle } from '../../lib/rawStyle'

export default function MiniBanners() {
  // Fileira de 3 destaques logo após "Navegue por Categorias".
  // Artes da loja; cada uma leva ao departamento correspondente.
  // Todos lazy: o LCP é o banner-home (hero); carregar estes junto com ele
  // só disputa banda no mobile — testado, atrasa o LCP em ~0.6s.
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
              <img
                loading="lazy"
                src={b.img}
                srcSet={`${b.img.replace('.webp', '-416.webp')} 416w, ${b.img} 832w`}
                sizes="(max-width: 768px) 100vw, 33vw"
                alt={b.alt}
                width="416"
                height="480"
              />
            </a>
          </div>
        ))}
      </div>
      {"\n "}
    </div>
  )
}
