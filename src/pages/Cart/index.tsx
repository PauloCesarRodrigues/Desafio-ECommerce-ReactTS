import { MapPin} from "phosphor-react";
import { CartContainer, FormCartContainer, CartFormHeader, CartFormHeaderText, FormColumn} from "./styles";
import { Checkout } from './components/Checkout/index'
import { PaymentMethod } from "./components/PaymentMethod/index";
import { FormCart } from "./components/FormCart";


export function Cart(){
  return(
    <CartContainer>

    <FormColumn>
      <h1>Complete seu Pedido</h1>
      <FormCartContainer>

        <CartFormHeader>
          <MapPin size={28}/>
          <CartFormHeaderText>
            <h2>Endereço de Entrega</h2>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </CartFormHeaderText>
        </CartFormHeader>
    
        <FormCart/>
      </FormCartContainer>

      <PaymentMethod/>

    </FormColumn>

    <Checkout/>

    </CartContainer>
  )
}