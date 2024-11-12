import styled from "styled-components"

export const CheckoutColumn = styled.div`
  margin-right: 13.4rem;

  font-family: ${props => props.theme["title-font"]};
  font-size: 0.6rem;
  line-height: 1.3;

  margin-bottom: 2rem;

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

    font-size: 1rem;
    color: ${props => props.theme["white-100"]};

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

`


export const CartCheckoutTotalItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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


export const CheckoutCoffees = styled.div`
  img{
    margin-top: 4rem;
    margin-left: 3.75rem;

    width: 5.125rem;
    height: 5.125rem;
  }

`

export const LineCoffee = styled.span`
  display: block;
  margin-left: 4rem;
  margin-right: 1rem;  
  margin-bottom: 2rem;

  width: 80%;
  height: 1px;

  background-color: ${props => props.theme["white-900"]};
`

  export const CheckoutCoffeesContainerInfoNoImage = styled.div`
  display: flex;
  flex-direction: column;
`

export const CheckoutCoffeesContainerInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;  

  margin-right: 5rem;
  margin-top: 4.25rem;

  p{
    font-size: 1.3rem;
    color: ${props => props.theme["brown-700"]};
    font-family: ${props => props.theme["default-font"]};
    font-weight: normal;

    flex-wrap: wrap;
    width: 20ch;
    word-wrap: break-word;
  }

  span{
    align-items: right;
    font-size: 1.3rem;
    color: ${props => props.theme["brown-500"]};
    font-family: ${props => props.theme["default-font"]};
    font-weight: bolder;
  }
`;

export const CheckoutCoffeesConfigButton = styled.div`

  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin-top: 0.4rem;

  button{

    display: flex;
    flex-direction: row;

    align-items: center;
    box-sizing: border-box;

    padding-left: 0.6rem;

    color: ${props => props.theme["purple-500"]};
    margin-left: 0.7rem;

    width: 6.75rem;
    height: 2.2rem;
    
    background-color: ${props => props.theme["white-900"]};
    text-align: center;
    border-radius: 7px;

    border: none;

    cursor: pointer;

    p{
      font-weight: normal;

      margin-left: 0.5rem;
      color: ${props => props.theme["brown-500"]};
      font-size: 0.8rem;
      font-family: ${props => props.theme["default-font"]};
    }
  }

  button:active{
      outline: 1px solid ${props => props.theme["purple-500"]};
    }

  button:hover{
    background-color: ${props => props.theme["brown-100"]};
  }
`