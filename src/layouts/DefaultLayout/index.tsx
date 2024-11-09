import { Link, Outlet } from 'react-router-dom'
import Logo from './assets/logo.svg'
import { Header, HeaderNav, NavCart, NavLocation } from './styles'
import { MapPin, ShoppingCartSimple } from 'phosphor-react'

export function Defaultlayout(){
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
            <span></span>
          </Link>
        </NavCart>

      </HeaderNav>
    </Header>
    <Outlet />
    </>
  )
}