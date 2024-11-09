import styled from "styled-components";

export const CartContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-top: 5rem;
`

export const FormColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 13.4rem;
  margin-bottom: 5rem;
  gap: 1.5rem;

  font-family: ${props => props.theme["title-font"]};
  font-size: 0.6rem;
  line-height: 1.3;

  h1{
    -webkit-text-stroke: 0.5px ${props => props.theme["brown-500"]};
  } 
`

export const CartForm = styled.div`
  width: 53.2rem;
  height: 31.25rem;
  background-color: ${props => props.theme["white-500"]};
  border-radius: 6px;
`

export const CartPayment = styled.div`
  background-color: ${props => props.theme["white-500"]};
  height: 17.3rem;
  width: 53.2rem;
  border-radius: 8px;
`


export const CartFormHeader = styled.header`

  display: flex;
  flex-direction: row;
  align-items: flex-start;

  gap: 0.2rem;

  margin: 3.75rem 0 3.125rem 3.5rem;

  color: ${props => props.theme["orange-800"]}; 
`

export const CartFormHeaderText = styled.div`
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


export const FormData = styled.div``

export const FormDataNumberAndComplement = styled.div``

export const FormDataDistrictCityUF = styled.div``










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
  border-radius: 6px 44px
`

