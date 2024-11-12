import styled from "styled-components"

export const CartPaymentMethod = styled.div`
  background-color: ${props => props.theme["white-500"]};
  height: 17.3rem;
  width: 53.2rem;
  border-radius: 8px;
`

export const CartPaymentMethodHeader = styled.header`

  display: flex;
  flex-direction: row;
  align-items: flex-start;

  gap: 0.2rem;

  margin: 3.75rem 0 3.125rem 3.5rem;

  color: ${props => props.theme["purple-500"]}; 
`

export const CartPaymentMethodHeaderText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h2{
    font-size: 1.3rem;
    font-weight: normal;
    font-family: ${props => props.theme["default-font"]};
    color: ${props => props.theme["brown-700"]};

    margin-bottom:  0.5rem;
  }

  p{
    font-size: 1rem;
    font-family: ${props => props.theme["default-font"]};
    color: ${props => props.theme["brown-500"]};
    font-weight: normal;
  }
`

export const PaymentMethods = styled.div`
  display: flex;
  gap: 1rem;
  margin: 0 3.25rem 0 3.25rem;
`

interface PaymentButtonProp{
  $isActive: boolean;
}


export const PaymentButton = styled.button<PaymentButtonProp>`

  display: flex;
  flex-direction: row;
  
  align-items: center;

  height: 4rem;
  width: 14.5rem;

  background-color: ${({ $isActive, theme }) => $isActive ? theme["purple-100"] : theme["white-900"]};
  outline: ${({ $isActive, theme }) => $isActive ? `2px solid ${theme["purple-500"]}` : "none"};

  color: ${props => props.theme["purple-500"]};
  border-radius: 6px;

  box-sizing: border-box;
  padding-left: 1.5rem;
  padding-right: 1rem;
  gap: 1rem;

  border: none;

  cursor: pointer;

  P{
    font-size: 1rem;
    color: ${props => props.theme["brown-500"]};
    font-weight: normal;
    font-family: ${props => props.theme["default-font"]};
  }
  

  button:hover{
    background-color: ${props => props.theme["brown-100"]};
  }
  
`