import { Bank, CreditCard, CurrencyDollar, MapPin, Money } from "phosphor-react";
import { CartCheckout, CartContainer, CartForm, CartFormHeader, CartFormHeaderText, CheckoutColumn, FormColumn, FormDataDistrictCityUF, FormDataNumberAndComplement, FormData, FormDataDistrict, FormDataCity, FormDataUf, CartPaymentMethod, CartPaymentMethodHeader, CartPaymentMethodHeaderText, PaymentMethods } from "./styles";

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


      <CartPaymentMethod>
        <CartPaymentMethodHeader>
          <CurrencyDollar size={28}/>

          <CartPaymentMethodHeaderText>
            <h2>Pagamento</h2>
            <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
          </CartPaymentMethodHeaderText>

        </CartPaymentMethodHeader>

        <PaymentMethods>
          <button><CreditCard size={20} /> <p>CARTÃO DE CRÉDITO </p></button>
          <button><Bank size={20} /> <p>CARTÃO DE DÉBITO</p></button>
          <button><Money size={20} /> <p>DINHEIRO</p></button>
        </PaymentMethods>

      </CartPaymentMethod>
    </FormColumn>

    <CheckoutColumn>
      <h1>Cafés selecionados</h1>
      <CartCheckout></CartCheckout>
    </CheckoutColumn>

    </CartContainer>
  )
}