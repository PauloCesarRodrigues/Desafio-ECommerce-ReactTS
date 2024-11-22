import styled from "styled-components";

export const CoffeeSectionStyle = styled.section`
  position: absolute;
  z-index: 1000;
  margin-left: 15rem;
  margin-top: -6rem;

  @media screen and (max-width: 1919px){
    margin-top: 6rem;
  }

  @media screen and (max-width: 1600px){
    margin-top: 8rem;
  }

  @media screen and (max-width: 1200px){
    margin-top: 10rem;
  }

  @media screen and (max-width: 700px){
    margin-top: 15rem;
  }

  @media screen and (max-width: 600px){
    margin-top: 20rem;
  }

  h1{
    font-family: ${props => props.theme["title-font"]};
    color: ${props => props.theme["brown-700"]};
    font-size: 2rem;
    line-height: 1.3;
    font-weight: bolder;
    -webkit-text-stroke: 1.5px ${props => props.theme["brown-700"]};
  }
`;

export const ContainerCoffee = styled.div`
  
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 3.5rem 10rem 5rem 0;
  gap: 5rem 2.7rem;

  box-sizing: border-box;

  @media screen and (max-width: 1900px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 720px) {
    gap: 5rem 3rem;
  }

`

export const CoffeeCardStyle = styled.div`
  height: 24rem;
  width: 21rem;
  background-color: ${props => props.theme["white-500"]};
  border-radius: 8px 50px;
`

export const CoffeeCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  img{
    height: 140px;
    width: 140px;
    margin-top: -35px;
    margin-bottom: 1rem;
  }

  h2{
    font-family: ${props => props.theme["title-font"]};
    font-size: 1.6rem;
    line-height: 1.3;
    font-weight: bolder;
    color: ${props => props.theme["brown-700"]};
    -webkit-text-stroke: 0.8px ${props => props.theme["brown-700"]};
    margin-bottom: 0.5rem;
  }

`

export const Tags = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
  margin-bottom: 1rem;

  span{
    color: ${props => props.theme["orange-800"]};
    font-size: 0.75rem;
    line-height: 1.3;
    font-weight: bold;
    font-family: ${props => props.theme["default-font"]};
    background-color: ${props => props.theme["orange-100"]};
    border-radius: 12px;
    padding: 6px 10px;
  }
`

export const Description = styled.div`

  font-family: ${props => props.theme["default-font"]};
  color: ${props => props.theme["brown-300"]};
  font-size: 1rem;
  line-height: 1.3;
  font-weight: normal;

  margin: 0 1.5rem 3rem 1.5rem;
`

export const CoffeCardBuy = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;


  button{
    border: none;
    stroke: none;
    background-color: ${props => props.theme["purple-800"]};
    color: ${props => props.theme["white-100"]};
    padding: 12px 14px;
    border-radius: 9px;
    margin-right: 1.8rem;
    cursor: pointer;
  }

  button:hover{
    background-color: ${props => props.theme["purple-500"]};
  }

  button:disabled{
    color: ${props => props.theme["purple-100"]};
  }

  button:disabled:hover{
    background-color: ${props => props.theme["purple-800"]};
  }
`

export const InputQuantity = styled.div`  
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  box-sizing: border-box;

  margin-right: 1rem;
  margin-left: 1.5rem;

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
    margin: 0;
    background-color: transparent;
    color: ${props => props.theme["purple-500"]};
  }

  button:hover{
    color: ${props => props.theme["purple-800"]};
    background-color: transparent;
  }
`

export const CoffeCardPrice = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;

  color: ${props => props.theme["brown-500"]};
  line-height: 1.3;

  gap: 0.2rem;

  span{
    font-size: 1rem;
    font-weight: normal;
    font-family: ${props => props.theme["default-font"]};
    margin-top: 0.4rem;
  }

  p{
    font-size: 2rem;
    font-weight: bolder;
    font-family: ${props => props.theme["title-font"]};
    -webkit-text-stroke: 0.9px ${props => props.theme["brown-500"]};
    
  }
`