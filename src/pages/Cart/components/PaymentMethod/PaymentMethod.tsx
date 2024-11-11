import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import { CartPaymentMethod, CartPaymentMethodHeader, CartPaymentMethodHeaderText, PaymentMethods } from "./styles";

export function PaymentMethod(){
  return(
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
  )
}