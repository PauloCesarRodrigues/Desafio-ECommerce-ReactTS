import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import {
  CartPaymentMethod,
  CartPaymentMethodHeader,
  CartPaymentMethodHeaderText,
  PaymentButton,
  PaymentMethods,
} from "./styles";
import { useContext, useState } from "react";
import { OrderDataContext } from "../../../../context/OrderDataContext";

export function PaymentMethod() {
  const [activePaymentMethod, setActivePaymentMethod] = useState<string | null>(null);

  const context = useContext(OrderDataContext);
  const { setFinishedOrder } = context;

  const paymentMethods: { [key: string]: string } = {
    CreditCard: 'Cartão de Crédito',
    DebitCard: 'Cartão de Débito',
    Money: 'Dinheiro',
  };

  function handleSelectPaymentMethod(paymentMethod: string) {
    if (activePaymentMethod === paymentMethod) return;

    setActivePaymentMethod(paymentMethod);
    setFinishedOrder((prevOrder) => ({
      ...(prevOrder || {
        street: '',
        number: 0,
        district: '',
        city: '',
        uf: '',
      }),
      paymentMethod: paymentMethods[paymentMethod],
    }));
  }

  return (
    <CartPaymentMethod>
      <CartPaymentMethodHeader>
        <CurrencyDollar size={28} />
        <CartPaymentMethodHeaderText>
          <h2>Pagamento</h2>
          <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
        </CartPaymentMethodHeaderText>
      </CartPaymentMethodHeader>

      <PaymentMethods>
        {Object.keys(paymentMethods).map((method) => (
          <PaymentButton
            key={method}
            $isActive={activePaymentMethod === method}
            onClick={() => handleSelectPaymentMethod(method)}
          >
            {method === 'CreditCard' && <CreditCard size={20} />}
            {method === 'DebitCard' && <Bank size={20} />}
            {method === 'Money' && <Money size={20} />}
            <p>{paymentMethods[method]}</p>
          </PaymentButton>
        ))}
      </PaymentMethods>
    </CartPaymentMethod>
  );
}