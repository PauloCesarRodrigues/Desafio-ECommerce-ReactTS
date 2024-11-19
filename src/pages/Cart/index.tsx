import { MapPin } from "phosphor-react";
import {
  CartContainer,
  FormCartContainer,
  CartFormHeader,
  CartFormHeaderText,
  FormColumn,
} from "./styles";
import { Checkout } from "./components/Checkout/index";
import { PaymentMethod } from "./components/PaymentMethod/index";
import { FormCart } from "./components/FormCart";

import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { FormProvider, useForm } from "react-hook-form";


const newAddressValidationSchema = zod.object({
  cep: zod.string().min(8).max(8),
  street: zod.string().min(1),
  number: zod.number().min(1),
  complement: zod.string().optional(),
  district: zod.string().min(1),
  city: zod.string().min(1),
  uf: zod.string().min(1).max(2),
});

export function Cart() {
  const methods = useForm({
    resolver: zodResolver(newAddressValidationSchema),
  });

  return (
    <CartContainer>
      <FormProvider {...methods}>
        <FormColumn>
          <h1>Complete seu Pedido</h1>
          <FormCartContainer>
            <CartFormHeader>
              <MapPin size={28} />
              <CartFormHeaderText>
                <h2>Endereço de Entrega</h2>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </CartFormHeaderText>
            </CartFormHeader>

            <FormCart />
          </FormCartContainer>

          <PaymentMethod />
        </FormColumn>

        <Checkout />
      </FormProvider>
    </CartContainer>
  );
}
