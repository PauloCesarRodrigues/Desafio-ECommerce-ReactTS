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
  SubmitButtonText,
} from "./styles";

import { useFormContext } from "react-hook-form";
import { OrderContext } from "../../../../context/OrderContext";
import { OrderDataContext } from "../../../../context/OrderDataContext";
import { useNavigate } from "react-router-dom";

export function Checkout() {
  const navigate = useNavigate();

  const { handleSubmit } = useFormContext();

  const contextData = useContext(OrderDataContext);
  const { setFinishedOrder, finishedOrder } = contextData;

  const [paymentMethodButtonStatus, setPaymentMethodButtonStatus] = useState(false);

  useEffect(() => {
    if (finishedOrder?.paymentMethod === "") setPaymentMethodButtonStatus(false);
    if (finishedOrder?.paymentMethod !== "") setPaymentMethodButtonStatus(true);
  }, [finishedOrder]);

  const context = useContext(OrderContext);
  const { activeOrder } = context;

  const [allCoffeesPrice, setAllCoffeesPrice] = useState(0);

  const [coffeeQuantityAllowed, setCoffeeQuantityAllowed] = useState(false);

  useEffect(() => {
    if (activeOrder.length > 0) setCoffeeQuantityAllowed(true);
    if (activeOrder.length === 0) setCoffeeQuantityAllowed(false);

    const totalCoffesPrice = activeOrder.reduce((total, coffee) => {
      return total + coffee.value * (coffee.quantity || 1);
    }, 0);
    setAllCoffeesPrice(totalCoffesPrice);
  }, [activeOrder]);

  function onSubmit(data: any) {

    if (!paymentMethodButtonStatus) return;
    if (!coffeeQuantityAllowed) return;

    setFinishedOrder((prevOrder) => ({
      ...(prevOrder || {
        street: "",
        number: 0,
        district: "",
        city: "",
        uf: "",
        paymentMethod: "",
      }),
      street: data.street,
      number: data.number,
      district: data.district,
      city: data.city,
      uf: data.uf,
      paymentMethod: finishedOrder?.paymentMethod ?? "",
    }));

    navigate("/finished");
  }

  const fretePrice = 12.5;
  const dynamicDeliverPrice = allCoffeesPrice === 0 ? 0 : fretePrice.toFixed(2);

  const totalCoffeePrice = allCoffeesPrice === 0 ? 0 : (allCoffeesPrice + fretePrice).toFixed(2);

  let isSubmitButtonActive = true;

  if (allCoffeesPrice > 0 && paymentMethodButtonStatus && coffeeQuantityAllowed) {
    isSubmitButtonActive = false;
  }

  return (
    <CheckoutColumn>
      <h1>Cafés selecionados</h1>
      <CartCheckout>
        {activeOrder.map((coffee) => (
          <CoffeeCheckout
            key={coffee.name}
            coffeeName={coffee.name}
            price={coffee.value}
            imgSrc={coffee.image}
            coffeeQuantity={coffee.quantity}
          />
        ))}

        <CartCheckoutPrice>
          <CartCheckoutTotalItem>
            <p> Total de itens </p>
            <p> R$ {allCoffeesPrice.toFixed(2).replace(".", ",")}</p>
          </CartCheckoutTotalItem>

          <CartCheckoutDeliveryPrice>
            <p> Entrega </p>
            <p> R$ {Number(dynamicDeliverPrice).toFixed(2).replace(".", ",")}</p>
          </CartCheckoutDeliveryPrice>

          <CartCheckoutTotalItemsPrice>
            <p> Total </p>
            <p> R$ {Number(totalCoffeePrice).toFixed(2).replace(".", ",")}</p>
          </CartCheckoutTotalItemsPrice>

          <button onClick={handleSubmit(onSubmit)} type="submit" disabled={isSubmitButtonActive}>
            <SubmitButtonText>CONFIRMAR PEDIDO</SubmitButtonText>
          </button>
        </CartCheckoutPrice>
      </CartCheckout>
    </CheckoutColumn>
  );
}
