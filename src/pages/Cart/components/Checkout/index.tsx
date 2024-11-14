/* eslint-disable @typescript-eslint/no-explicit-any */

import { useContext, useEffect, useState } from "react";
import { CoffeeCheckout } from "./components/CoffeeCheckout";
import {
  CartCheckout,
  CartCheckoutDeliveryPrice,
  CartCheckoutPrice,
  CartCheckoutTotalItem,
  CartCheckoutTotalItemsPrice,
  CheckoutColumn,
} from "./styles";

import { useFormContext } from "react-hook-form";
import { OrderContext } from "../../../../context/OrderContext";

export function Checkout() {
  const { handleSubmit } = useFormContext();

  function onSubmit(data: any) {
    console.log(data);
    console.log("Indo para tela final");
  }

  const context = useContext(OrderContext);
  const { activeOrder } = context;

  const [allCoffeesPrice, setAllCoffeesPrice] = useState(0);

  useEffect(() => {
    const totalCoffesPrice = activeOrder.reduce((total, coffee) => {
      return total + coffee.value * (coffee.quantity || 1);
    }, 0);
    setAllCoffeesPrice(totalCoffesPrice);
  }, [activeOrder]);
  
  const fretePrice = 12.50
  const dynamicDeliverPrice = allCoffeesPrice === 0 ? 0 : fretePrice.toFixed(2)

  const totalCoffeePrice = allCoffeesPrice === 0 ? 0 : (allCoffeesPrice + fretePrice).toFixed(2)

  let  isSubmitButtonActive
  if(allCoffeesPrice === 0) isSubmitButtonActive = true

  return (
    <CheckoutColumn>
      <h1>Cafés selecionados</h1>
      <CartCheckout>

      {activeOrder.map((coffee) => (
        <CoffeeCheckout key={coffee.name} coffeeName={coffee.name} price={coffee.value} imgSrc={coffee.image} coffeeQuantity={coffee.quantity}/>
      ))}

        <CartCheckoutPrice>
          <CartCheckoutTotalItem>
            <p> Total de itens </p>
            <p> R$ {allCoffeesPrice.toFixed(2)}</p>
          </CartCheckoutTotalItem>

          <CartCheckoutDeliveryPrice>
            <p> Entrega </p>
            <p> R$ {dynamicDeliverPrice}</p>
          </CartCheckoutDeliveryPrice>

          <CartCheckoutTotalItemsPrice>
            <p> Total </p>
            <p> R$ {totalCoffeePrice}</p>
          </CartCheckoutTotalItemsPrice>

          <button onClick={handleSubmit(onSubmit)} type="submit" disabled={isSubmitButtonActive}>
            CONFIRMAR PEDIDO
          </button>
        </CartCheckoutPrice>
      </CartCheckout>
    </CheckoutColumn>
  );
}
