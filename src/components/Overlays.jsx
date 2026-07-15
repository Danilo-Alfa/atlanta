import { rawStyle } from '../lib/rawStyle'
import fastShoppingTemplateHtml from '../data/fastShoppingTemplateHtml'

export default function Overlays() {
  return (
    <>
      <div>
        {"\n "}
        <input type="checkbox" id="alert-show" defaultValue="on" className="sf-hidden" />
        {"\n"}
        <div className="box-alerts sf-hidden">
          {"\n \n"}
        </div>
        {" "}
      </div>
      <div className="site-lgpd sf-hidden">
        {"\n \n \n "}
      </div>
      <div className="modal fade sf-hidden" id="modal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel1" aria-hidden="true">
        {"\n \n"}
      </div>
      <div data-module="render" data-render="snippets/cart_preview" className="sf-hidden">
        <div className="modal cart-preview sf-hidden" data-module="cartPreview" data-cart-preview="modal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          {"\n \n"}
        </div>
      </div>
      <div className="modal fade sf-hidden" id="modal-form" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel2" aria-hidden="true">
        {"\n \n"}
      </div>
      <iframe id="modal-form-iframe" height="0" width="0" frameBorder="0" marginWidth="0" marginHeight="0" ref={rawStyle("display:none")} />
      <template id="fast-shopping-template" dangerouslySetInnerHTML={{ __html: fastShoppingTemplateHtml }} />
      <a href="tel:+551136483388">
        <img title="Televendas Atlanta" src="/assets/img-321fce640c7b.webp" className="ligacao" ref={rawStyle("width:50px")} />
      </a>
    </>
  )
}
