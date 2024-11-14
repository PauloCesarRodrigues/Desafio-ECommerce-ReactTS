import { Minus, Plus, Trash } from "phosphor-react";
import { CheckoutCoffeesContainer } from "../../styles";
import { CheckoutCoffees, CheckoutCoffeesConfigButton, CheckoutCoffeesContainerInfo, CheckoutCoffeesContainerInfoNoImage, InputQuantity, LineCoffee } from "./styles";
import { useContext, useEffect } from "react";
import { OrderContext } from "../../../../../../context/OrderContext";


interface CoffeeFromOrderPage{
  key: string,
  coffeeName: string,
  price: number,
  imgSrc: string,
  coffeeQuantity?: number
}

export function CoffeeCheckout({ coffeeName, price, imgSrc, coffeeQuantity}: CoffeeFromOrderPage){

  const context = useContext(OrderContext);
  const { setActiveOrder } = context;

  useEffect(()=>{
    if(coffeeQuantity === 0) handleDeleteCoffeeFromOrder(coffeeName)
  },[coffeeQuantity, handleDeleteCoffeeFromOrder, coffeeName])

  function handleMinusCoffeeQuantity(name: string) {

    setActiveOrder((prevActiveOrder) => {
      return prevActiveOrder.map((coffee) => {
        
        if (coffee.name === name && coffee.quantity > 0) {
          return { ...coffee, quantity: coffee.quantity - 1 }; 
        }
        return coffee; 
      });
    });


  }

  function handlePlusCoffeeQuantity(name: string){
    setActiveOrder((prevActiveOrder) => {
      return prevActiveOrder.map((coffee) => {
        
        if (coffee.name === name && coffee.quantity >= 0) {
          return { ...coffee, quantity: coffee.quantity + 1 }; 
        }
        return coffee; 
      });
    });
  }

  function handleDeleteCoffeeFromOrder(name: string) {
    setActiveOrder((prevActiveOrder) => {
      const updatedOrder = prevActiveOrder.filter(coffee => coffee.name !== name);
      return updatedOrder;
    });
  }

  return(
    <CheckoutCoffees>
    <CheckoutCoffeesContainer>
    <img src={imgSrc} />

    <CheckoutCoffeesContainerInfoNoImage>
      <CheckoutCoffeesContainerInfo>
        <p>{coffeeName}</p>
        <span>
          R$
          {(price * coffeeQuantity).toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </span>
      </CheckoutCoffeesContainerInfo>

      <CheckoutCoffeesConfigButton>
        <InputQuantity>
          <button onClick={() => handleMinusCoffeeQuantity(coffeeName, coffeeQuantity)}> <Minus weight='fill' size={18}/> </button>
          <p>{coffeeQuantity}</p>
          <button onClick={() => handlePlusCoffeeQuantity(coffeeName)}> <Plus weight='fill' size={18}/></button>
      </InputQuantity>
        <button onClick={() => handleDeleteCoffeeFromOrder(coffeeName)}> <Trash size={21}/> <p>REMOVER</p></button>
      </CheckoutCoffeesConfigButton>
      
    </CheckoutCoffeesContainerInfoNoImage>
    </CheckoutCoffeesContainer>
    <LineCoffee> </LineCoffee>
  </CheckoutCoffees>
  )
}