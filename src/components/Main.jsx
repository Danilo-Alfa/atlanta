import BannerHome from './main/BannerHome.jsx'
import BannersShowcaseA from './main/BannersShowcaseA.jsx'
import BannersShowcaseB from './main/BannersShowcaseB.jsx'
import BannersShowcaseC from './main/BannersShowcaseC.jsx'
import BannersShowcaseD from './main/BannersShowcaseD.jsx'
import Brands from './main/Brands.jsx'
import BuySizes from './main/BuySizes.jsx'
import FloatingWhatsapp from './main/FloatingWhatsapp.jsx'
import Instagram from './main/Instagram.jsx'
import MiniBanners from './main/MiniBanners.jsx'
import Partners from './main/Partners.jsx'
import Reviews from './main/Reviews.jsx'
import ShowcaseCimento from './main/ShowcaseCimento.jsx'
import ShowcaseDestaques from './main/ShowcaseDestaques.jsx'
import ShowcaseMadeiras from './main/ShowcaseMadeiras.jsx'
import ShowcaseNovidades from './main/ShowcaseNovidades.jsx'
import ShowcasePromocao from './main/ShowcasePromocao.jsx'
import ShowcaseRecomendados from './main/ShowcaseRecomendados.jsx'
import ShowcaseTelhas from './main/ShowcaseTelhas.jsx'

export default function Main() {
  return (
    <main className="site-main">
      {"\n \n \n "}
      <div className="slider_parameters d-none hidden hide" data-quantity-desktop="4" data-quantity-mobile="2" />
      {"\n \n "}
      <BannerHome />
      {"\n \n"}
      <BuySizes />
      {"\n "}
      <MiniBanners />
      {"\n \n \n \n \n \n \n \n \n \n "}
      <ShowcaseDestaques />
      {"\n \n \n \n \n \n \n \n \n \n \n \n "}
      <ShowcasePromocao />
      {"\n \n \n \n \n \n \n \n \n \n \n \n "}
      <ShowcaseTelhas />
      {"\n \n \n "}
      <Brands />
      {"\n \n \n \n \n \n \n \n \n \n \n "}
      <ShowcaseMadeiras />
      {"\n \n \n \n \n \n \n \n \n \n \n \n "}
      <ShowcaseCimento />
      {"\n \n \n \n \n \n \n \n \n \n \n "}
      <ShowcaseNovidades />
      {"\n \n "}
      <BannersShowcaseA />
      {"\n "}
      <BannersShowcaseB />
      {"\n\n"}
      <FloatingWhatsapp />
      {"\n \n \n \n \n \n \n \n \n "}
      <ShowcaseRecomendados />
      {"\n \n \n "}
      <Reviews />
      {"\n \n"}
      <Instagram />
      {"\n\n \n "}
      <Partners />
      {" \n "}
      <BannersShowcaseC />
      {"\n "}
      <BannersShowcaseD />
      {"\n \n \n "}
    </main>
  )
}
