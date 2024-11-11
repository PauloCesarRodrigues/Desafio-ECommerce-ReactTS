import { MapPin} from "phosphor-react";
import { CartContainer, CartForm, CartFormHeader, CartFormHeaderText, FormColumn, FormDataDistrictCityUF, FormDataNumberAndComplement, FormData, FormDataDistrict, FormDataCity, FormDataUf} from "./styles";
import { Checkout } from './components/Checkout/Checkout'
import { PaymentMethod } from "./components/PaymentMethod/PaymentMethod";

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
            <input type="number" min={0} max={99999999} placeholder="CEP"/>
            <input type="text" placeholder="Rua"/>

            <FormDataNumberAndComplement>
              <input type="number" placeholder="Número"/>
              <input type="text" placeholder="Complemento" />
            </FormDataNumberAndComplement>

            <FormDataDistrictCityUF>

              <FormDataDistrict>
                <input type="text" placeholder="Bairro"/>
              </FormDataDistrict>

              <FormDataCity>
                <input type="text" placeholder="Cidade"/>
              </FormDataCity>

              <FormDataUf>
                <input type="text" placeholder="UF"/>
              </FormDataUf>

            </FormDataDistrictCityUF>
            
          </form>
        </FormData>
      </CartForm>

<PaymentMethod/>

    </FormColumn>

<Checkout/>

    </CartContainer>
  )
}