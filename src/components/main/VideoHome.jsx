import videoSrcDoc from '../../data/videoSrcDoc'

export default function VideoHome() {
  return (
    <div id="video-home">
      {"\n "}
      <div className="container">
        {"\n "}
        <div className="section-header">
          {"\n "}
          <h2 className="title-section">
            {"Conheça a BateForte"}
          </h2>
          {"\n "}
        </div>
        {"\n "}
        <div className="video-item flex">
          {"\n "}
          <iframe loading="lazy" width="560" height="315" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen sandbox="allow-popups allow-top-navigation-by-user-activation" srcDoc={videoSrcDoc} />
          {"\n "}
        </div>
        {"\n "}
      </div>
      {"\n "}
    </div>
  )
}
