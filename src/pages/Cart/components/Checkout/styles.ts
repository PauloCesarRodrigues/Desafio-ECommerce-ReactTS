import styled from "styled-components"

export const CheckoutColumn = styled.div`
  margin-right: 13.4rem;

  font-family: ${props => props.theme["title-font"]};
  font-size: 0.6rem;
  line-height: 1.3;

  h1{
    -webkit-text-stroke: 0.5px ${props => props.theme["brown-500"]};
    margin-bottom: 1.4rem;
  } 
`

export const CartCheckout = styled.div`
  width: 37.5rem;
  min-height: 18.75rem;
  background-color: ${props => props.theme["white-500"]};
  border-radius: 6px 44px;
`


export const CartCheckoutPrice = styled.div`

`

export const CartCheckoutTotalItemsPrice = styled.div`

`

export const CartCheckoutDeliveryPrice = styled.div`

`