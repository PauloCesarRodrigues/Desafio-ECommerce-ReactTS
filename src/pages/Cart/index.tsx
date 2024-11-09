import { MapPin } from "phosphor-react";
import { CartCheckout, CartContainer, CartForm, CartFormHeader, CartFormHeaderText, CartPayment, CheckoutColumn, FormColumn, FormDataDistrictCityUF, FormDataNumberAndComplement, FormData } from "./styles";

export function Cart(){
  return(
    <CartContainer>

    <FormColumn>
      <h1>Complete seu Pedido</h1>
      <CartForm>

        <CartFormHeader>
          <MapPin size={28}/>
          <CartFormHeaderText>
            <h2>Endereço de Entrega</h2>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </CartFormHeaderText>
        </CartFormHeader>

        <FormData>
          <form>
            <input type="number"/>
            <input type="text" />
            <FormDataNumberAndComplement>
              <input type="number"/>
              <input type="text" />
            </FormDataNumberAndComplement>
            <FormDataDistrictCityUF>
              <input type="text"/>
              <input type="text"/>
              <input type="text"/>
            </FormDataDistrictCityUF>
          </form>
        </FormData>

      </CartForm>
      <CartPayment></CartPayment>
    </FormColumn>

    <CheckoutColumn>
      <h1>Cafés selecionados</h1>
      <CartCheckout></CartCheckout>
    </CheckoutColumn>

    </CartContainer>
  )
}