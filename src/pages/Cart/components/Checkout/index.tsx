/* eslint-disable @typescript-eslint/no-explicit-any */
import { Trash } from "phosphor-react";
import {
  CartCheckout,
  CartCheckoutDeliveryPrice,
  CartCheckoutPrice,
  CartCheckoutTotalItem,
  CartCheckoutTotalItemsPrice,
  CheckoutCoffees,
  CheckoutCoffeesConfigButton,
  CheckoutCoffeesContainer,
  CheckoutCoffeesContainerInfo,
  CheckoutCoffeesContainerInfoNoImage,
  CheckoutColumn,
  LineCoffee,
} from "./styles";

import { useFormContext } from "react-hook-form";

export function Checkout() {
  const { handleSubmit } = useFormContext();

  function onSubmit(data: any) {
    console.log(data);
    console.log("Indo para tela final");
  }

  const cafes = [
    {
      description: "aaaa",
      image: "src/pages/Home/images/coffees/expressoAmericano.png",
      name: "Expresso Tradicional",
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
          <CheckoutCoffeesContainer>
          <img src={cafes[0].image} />

          <CheckoutCoffeesContainerInfoNoImage>
            <CheckoutCoffeesContainerInfo>
              <p>{cafes[0].name}</p>
              <span>
                R$
                {cafes[0].value.toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </span>
            </CheckoutCoffeesContainerInfo>

            <CheckoutCoffeesConfigButton>
              <p> - 1 + </p>
              <button> <Trash size={21}/> <p>REMOVER</p></button>
            </CheckoutCoffeesConfigButton>
            
          </CheckoutCoffeesContainerInfoNoImage>
          </CheckoutCoffeesContainer>
          <LineCoffee> </LineCoffee>
        </CheckoutCoffees>

        <CartCheckoutPrice>
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

          <button onClick={handleSubmit(onSubmit)} type="submit">
            {" "}
            CONFIRMAR PEDIDO{" "}
          </button>
        </CartCheckoutPrice>
      </CartCheckout>
    </CheckoutColumn>
  );
}
