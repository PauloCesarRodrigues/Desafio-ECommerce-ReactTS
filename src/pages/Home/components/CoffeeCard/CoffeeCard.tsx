import { useContext, useEffect, useState } from "react"
import { CoffeCardBuy, CoffeCardPrice, CoffeeCardInfo, CoffeeCardStyle, Description, InputQuantity, Tags } from "./styles"
import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import { OrderContext } from "../../../../context/OrderContext"


interface Coffee {
  name: string
  value: number
  description: string
  tags: string[]
  image: string
}

interface CoffeeCardProps { 
  coffee: Coffee
}

interface CoffeeWithQuantity extends Coffee {
  quantity?: number
} 


export function CoffeeCard({ coffee }: CoffeeCardProps) {

  const context = useContext(OrderContext)
  const { activeOrder, setActiveOrder } = context
  

  const [coffeeQuantity, setCoffeeQuantity] = useState(0)

  function handleMinusCoffeeQuantity(){
    if (coffeeQuantity === 0) return
    setCoffeeQuantity(coffeeQuantity - 1)
  }

  function handlePlusCoffeeQuantity(){
    if (coffeeQuantity === 99) return
    setCoffeeQuantity(coffeeQuantity + 1)
  }

  const [coffeeAllowedQuantity, setCoffeeAllowedQuantity] = useState(true)

  useEffect(() => {
    if(coffeeQuantity > 0) setCoffeeAllowedQuantity(false)
    if(coffeeQuantity <= 0) setCoffeeAllowedQuantity(true)

  }, [coffeeQuantity])


  function handleBuyCoffee(coffeeProp: CoffeeWithQuantity) {
    if (coffeeQuantity === 0) return
  
    coffeeProp.quantity = coffeeQuantity
  
    const updatedOrder = activeOrder.map((item) => {
      if (item.name === coffeeProp.name) {
        return { ...item, quantity: coffeeQuantity }
      }
      return item
    })
  
    const coffeeExists = activeOrder.some((item) => item.name === coffeeProp.name)
    if (!coffeeExists) {
      updatedOrder.push(coffeeProp)
    }
  
    setActiveOrder(updatedOrder)
    console.log(updatedOrder)
    setCoffeeQuantity(0)
  }


  
  return (
    <CoffeeCardStyle key={coffee.name}>
      <CoffeeCardInfo>

      <img src={coffee.image} alt={coffee.name} />

      <Tags>
        {coffee.tags.map((tag, index) => (
          <span key={`${coffee.name}-${tag}-${index}`}>
            <p>{tag}</p>
          </span>
        ))}
        </Tags>

        <h2>{coffee.name}</h2>
        <Description>{coffee.description}</Description>
      </CoffeeCardInfo>

      <CoffeCardBuy>
        <CoffeCardPrice>
          
        <span>R$</span> 
        <p>{
          coffee.value.toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
          })
        }</p>
        </CoffeCardPrice>

          <InputQuantity>
            <button onClick={handleMinusCoffeeQuantity}> <Minus weight='fill' size={18}/> </button>
            <p>{coffeeQuantity}</p>
            <button onClick={handlePlusCoffeeQuantity}> <Plus weight='fill' size={18}/></button>
          </InputQuantity>

        <button disabled={coffeeAllowedQuantity} onClick={() => handleBuyCoffee(coffee)}> <ShoppingCartSimple weight='fill' size={22}/> </button>
      </CoffeCardBuy>
    </CoffeeCardStyle>
  )
}