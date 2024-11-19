import { useContext, useEffect, useState } from "react";
import { OrderContext } from "../../context/OrderContext";
import { OrderDataContext } from "../../context/OrderDataContext";
import { Clock, CurrencyDollar, MapPin } from "phosphor-react";
import {
  ContainerInfo,
  FinishColumnIllustration,
  FinishContainer,
  FinishContainerInfoColumn,
  OrderInfo,
  OrderInfoDiv,
  OrderInfoIcon,
  OrderInfoSection,
} from "./styles";
import orderIllustration from "./images/Illustration.png";

export function Finished() {
  const { finishedOrder, setFinishedOrder } = useContext(OrderDataContext);
  const { setActiveOrder } = useContext(OrderContext);


  const [localOrder] = useState(finishedOrder);

  useEffect(() => {

    setActiveOrder([]);
    setFinishedOrder(null);
  }, [setActiveOrder, setFinishedOrder]);


  if (!localOrder) {
    return <h2>Carregando os detalhes do pedido...</h2>;
  }

  return (
    <FinishContainer>
      <FinishContainerInfoColumn>
        <h2>Uhu! Pedido confirmado</h2>
        <p>Agora é só aguardar que logo o café chegará até você</p>
        <ContainerInfo>
          <OrderInfoSection>
            <OrderInfo>
              <OrderInfoIcon $bgcolor={"purple"}>
                <MapPin size={22} weight="fill" />
              </OrderInfoIcon>
              <OrderInfoDiv>
                <div>
                  <p>Entrega em</p>
                  <span>{`${localOrder.street}, ${localOrder.number}`}</span>
                </div>
                <p>{`${localOrder.district} - ${localOrder.city}, ${localOrder.uf}`}</p>
              </OrderInfoDiv>
            </OrderInfo>

            <OrderInfo>
              <OrderInfoIcon $bgcolor={"yellow"}>
                <Clock size={22} weight="fill" />
              </OrderInfoIcon>
              <OrderInfoDiv>
                <p>Previsão de entrega</p>
                <span>20 min - 30 min</span>
              </OrderInfoDiv>
            </OrderInfo>

            <OrderInfo>
              <OrderInfoIcon $bgcolor={"orange"}>
                <CurrencyDollar size={22} weight="fill" />
              </OrderInfoIcon>
              <OrderInfoDiv>
                <p>Pagamento na entrega</p>
                <span>{localOrder.paymentMethod}</span>
              </OrderInfoDiv>
            </OrderInfo>
          </OrderInfoSection>
        </ContainerInfo>
      </FinishContainerInfoColumn>

      <FinishColumnIllustration>
        <img src={orderIllustration} alt="Pedido Confirmado" />
      </FinishColumnIllustration>
    </FinishContainer>
  );
}
