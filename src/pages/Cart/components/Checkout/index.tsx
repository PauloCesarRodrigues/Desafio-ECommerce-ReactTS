import {
  CartCheckout,
  CartCheckoutDeliveryPrice,
  CartCheckoutPrice,
  CartCheckoutTotalItem,
  CartCheckoutTotalItemsPrice,
  CheckoutCoffees,
  CheckoutColumn,
} from "./styles";

export function Checkout() {
  const cafes = [
    {
      description: "aaaa",
      image: "src/pages/Home/images/coffees/expressoAmericano.png",
      name: "aaaa",
      quantity: 1,
      tags: ["tag1", "tag2"],
      value: 9.9,
    },
  ];

  return (
    <CheckoutColumn>
      <h1>Cafés selecionados</h1>
      <CartCheckout>

        <CheckoutCoffees>

          <img />
          <div>
            <p>Expresso Tradicional</p>
            <p> R$ {`9,90`} </p>
          </div>

          <div>
            <p> - 1 + </p>
            <p> Remover </p>
          </div>


        </CheckoutCoffees>

        <CartCheckoutPrice>
          <span></span>
          <CartCheckoutTotalItem>
            <p> Total de itens </p>
            <p> R$ {`29,70`}</p>
          </CartCheckoutTotalItem>

          <CartCheckoutDeliveryPrice>
            <p> Entrega </p>
            <p> R$ {`3,50`}</p>
          </CartCheckoutDeliveryPrice>

          <CartCheckoutTotalItemsPrice>
            <p> Total </p>
            <p> R$ {`33,20`}</p>
          </CartCheckoutTotalItemsPrice>

          <button> CONFIRMAR PEDIDO </button>
        </CartCheckoutPrice>
      </CartCheckout>
    </CheckoutColumn>
  );
}
