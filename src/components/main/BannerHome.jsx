import { rawStyle } from '../../lib/rawStyle'

export default function BannerHome() {
  return (
    <div className="banner-home" data-settings={"{\"stopOnHover\":false,\"timer\":null,\"isMobile\":false,\"speed\":null,\"isLoop\":true,\"isAutoplay\":true}"}>
      {"\n \n "}
      <div className="item">
        {"\n \n \n \n "}
        <span target="_blank" rel="noopener noreferrer" className="item-image" aria-label="Banner" ref={rawStyle("--padding:32.291666666667%")}>
          {"\n "}
          <img loading="lazy" src="/assets/img-12ea4fb8d6d1.webp" alt="Banner" width="1920" height="620" />
          {"\n "}
        </span>
        {"\n "}
      </div>
      {"\n "}
    </div>
  )
}
