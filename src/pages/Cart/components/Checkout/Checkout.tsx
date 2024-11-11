import { CartCheckout, CartCheckoutDeliveryPrice, CartCheckoutPrice, CartCheckoutTotalItemsPrice, CheckoutColumn } from "./styles";

export function Checkout() {
  return (
    <CheckoutColumn>
      <h1>Cafés selecionados</h1>
      <CartCheckout>
        <h2> Café 1</h2>
        <h2> Café 2</h2>
        <CartCheckoutPrice>
          <CartCheckoutTotalItemsPrice>
            <p> Total de itens </p>
            <span> R$ {`29,70`}</span>
          </CartCheckoutTotalItemsPrice>

          <CartCheckoutDeliveryPrice>
            <p> Entrega </p>
            <span> R$ {`3,50`}</span>
          </CartCheckoutDeliveryPrice>

          <CartCheckoutTotalItemsPrice>
            <p> Total </p>
            <span> R$ {`33,20`}</span>
          </CartCheckoutTotalItemsPrice>

          <button> CONFIRMAR PEDIDO </button>
        </CartCheckoutPrice>
      </CartCheckout>
    </CheckoutColumn>
  );
}
