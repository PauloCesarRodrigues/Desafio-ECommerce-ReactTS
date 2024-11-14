import styled from 'styled-components'

export const CheckoutCoffees = styled.div`
  img{
    margin-top: 1.5rem;
    margin-left: 3.75rem;

    width: 5.125rem;
    height: 5.125rem;
  }

`

export const LineCoffee = styled.span`
  display: block;
  margin-left: 4rem;
  margin-right: 1rem;  
  margin-bottom: 1rem;

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
  margin-top: 1.75rem;

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

  button:hover{
    background-color: ${props => props.theme["brown-100"]};
  }
`

export const InputQuantity = styled.div`  
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  box-sizing: border-box;


  width: 7rem;
  background-color: ${props => props.theme["white-900"]};
  border: none;
  stroke: none;
  border-radius: 9px;


  p{
    font-family: ${props => props.theme["default-font"]};
    font-size: 1.2rem;
    line-height: 1.3;
    font-weight: bold;
  }

  button{
    margin-left: 0.5rem;
    background-color: transparent;
    color: ${props => props.theme["purple-500"]};
  }

  button:hover{
    color: ${props => props.theme["purple-800"]};
    background-color: transparent;
  }
`