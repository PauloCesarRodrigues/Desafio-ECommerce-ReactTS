import styled from "styled-components"

export const CheckoutColumn = styled.div`
  margin-right: 13.4rem;

  font-family: ${props => props.theme["title-font"]};
  font-size: 0.6rem;
  line-height: 1.3;

  margin-bottom: 2rem;

  h1{
    margin-top: 1rem;
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
  display: flex;
  flex-direction: column;

  color: ${props => props.theme["brown-500"]};
  font-size: 1.05rem;
  font-family: ${props => props.theme["default-font"]};
  font-weight: normal;

  margin: 0 3.375rem 0 3.375rem;

  gap: 1.3rem;

  button{
    width: 100%;
    height: 3.875rem;

    align-items: center;

    background-color: ${props => props.theme["orange-500"]};
    border-radius: 6px;

    border: none;
    stroke: none;

    cursor: pointer;
    
    margin-bottom: 2rem;

  }

  button:hover{
    background-color: ${props => props.theme["orange-800"]};
  }

  button a {
    text-decoration: none;
  }

  button a:hover {
    text-decoration: none; 
  }

`

export const SubmitButtonText = styled.p`

  font-size: 1rem;
  color: ${props => props.theme["white-100"]};
  
`

export const CartCheckoutTotalItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-top: 1rem;
`

export const CartCheckoutDeliveryPrice = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 1rem;
`

export const CartCheckoutTotalItemsPrice = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  font-size: 1.375rem;
  font-weight: bolder;
  color: ${props => props.theme["brown-700"]};
`


export const CheckoutCoffeesContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 2.625rem;
  gap: 1.5rem;
`


