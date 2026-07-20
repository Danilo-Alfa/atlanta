import { rawStyle } from '../../lib/rawStyle'

export default function BannerHome() {
  return (
    <div className="banner-home" data-settings={"{\"stopOnHover\":false,\"timer\":null,\"isMobile\":false,\"speed\":null,\"isLoop\":true,\"isAutoplay\":true}"}>
      {"\n \n "}
      <div className="item">
        {"\n \n \n \n "}
        <span className="item-image" aria-label="Banner" ref={rawStyle("--padding:55.121%")}>
          {"\n "}
          <img src="/assets/img-hero-bf.webp" alt="BateForte — tudo que sua construção precisa está aqui" width="1689" height="931" />
          {"\n "}
        </span>
        {"\n "}
      </div>
      {"\n "}
    </div>
  )
}
