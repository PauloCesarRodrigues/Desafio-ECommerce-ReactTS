import { Outlet } from 'react-router-dom'
import Logo from './assets/logo.svg'
import { Header, HeaderNav, NavCart, NavLocation } from './styles'
import { MapPin, ShoppingCartSimple } from 'phosphor-react'

export function Defaultlayout(){
  return(
    <>
    <Header>
      <img src={Logo}/>
      <HeaderNav>
        <NavLocation> 
          <MapPin size={22} weight='fill'/>
          <p>São Paulo, SP</p>
        </ NavLocation>

        <NavCart>
          <ShoppingCartSimple size={22} weight='fill'/>
          <p></p>
        </NavCart>

      </HeaderNav>
    </Header>
    <Outlet />
    </>
  )
}