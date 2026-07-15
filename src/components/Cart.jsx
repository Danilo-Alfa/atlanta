export default function Cart() {
  return (
    <div className="cart">
      {"\n "}
      <div className="cart-backdrop" />
      {"\n "}
      <section id="cart" className="dropdown cart__dropdown" aria-label="Carrinho">
        {"\n "}
        <div className="cart__vue js-vue-cart">
          <div className="cart__vue__header">
            <div className="cart__vue__icon">
              <i className="icon icon-arrow-left" />
              {"\n Fechar \n "}
            </div>
            {" "}
            <div className="cart__vue__text">
              <span>
                {"Carrinho de Compras"}
              </span>
            </div>
          </div>
          {" "}
          <div className="dropdown__content">
            <div className="cart__empty">
              <p>
                {"\n Seu carrinho está vazio.\n "}
              </p>
            </div>
          </div>
          {" "}
          <div className="dropdown__footer align-center">
            <p>
              {"Adicione produtos ao carrinho e eles aparecerão aqui."}
            </p>
          </div>
        </div>
        {"\n "}
      </section>
      {"\n"}
    </div>
  )
}
