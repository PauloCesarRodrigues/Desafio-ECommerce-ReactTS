import { Link, Outlet } from 'react-router-dom'
import Logo from './assets/logo.svg'
import { CoffeeQuantityOrder, Header, HeaderNav, NavCart, NavLocation } from './styles'
import { MapPin, ShoppingCartSimple } from 'phosphor-react'
import { useContext, useEffect, useState } from 'react'
import { OrderContext } from '../../context/OrderContext'

export function Defaultlayout(){

  const context = useContext(OrderContext)
  const { activeOrder } = context
  
  const [isNotifyEmpty, setIsNotifyEmpty] = useState(true)

  useEffect(()=>{
    if(activeOrder.length === 0) setIsNotifyEmpty(true)
    if(activeOrder.length !== 0) setIsNotifyEmpty(false)
  },[activeOrder])

  return(
    <>
    <Header>
      <Link to="/">
        <img src={Logo}/>
      </Link>
      <HeaderNav>
        <NavLocation> 
          <MapPin size={22} weight='fill'/>
          <p>São Paulo, SP</p>
        </ NavLocation>

        <NavCart>
          <Link to="/cart">
            <p><ShoppingCartSimple size={22} weight='fill'/></p>
            <CoffeeQuantityOrder $isempty={isNotifyEmpty}><p>{activeOrder.length}</p></CoffeeQuantityOrder>
          </Link>
        </NavCart>

      </HeaderNav>
    </Header>
    <Outlet />
    </>
  )
}