import styled from "styled-components";

export const Header = styled.header`
  z-index: 99999;
  height: 6.5rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img{
    width: 85px;
    height: 40px;
    margin-left: 15rem;
    cursor: pointer;
  }
`

export const HeaderNav = styled.div`
  gap: 0.75rem;
  display: flex;
  margin-right: 10rem;

  @media screen and (max-width: 1150px) {
    margin-left: auto;
    margin-right: 10rem;
  }

`

export const NavLocation = styled.div`

display: flex;
gap: 0.25rem;
justify-content: center;
align-items: center;
width: 9rem;
height: 2.375rem;
padding: 0.5rem;
background-color: ${props => props.theme['purple-100']};
border-radius: 6px;
cursor: pointer;

color: ${props => props.theme['purple-800']};

p{
  line-height: 1.3;
  font-size: 0.875rem;
  font-family: ${props=> props.theme["brown-100"]};
  font-weight: normal;
}

`

export const NavCart = styled.div`
  
  padding: 0.5rem;
  background-color: ${props=> props.theme['orange-100']};
  border-radius: 6px;
  height: 2.375rem;
  width: 2.375rem;
  cursor: pointer;

  p{
    color: ${props =>props.theme['orange-800']};
  }
`

  interface IsNotifyEmpty{
    $isempty: boolean;
  }

export const CoffeeQuantityOrder = styled.span<IsNotifyEmpty>`
  display: ${({ $isempty }) => ($isempty ? 'none' : 'block')};

  position: absolute;
  text-align: center;
  text-decoration: none;

  margin-left: 1rem;
  margin-top: -3rem;

  p{
    color:${props => props.theme["white-100"]};
    font-family: ${props=> props.theme["default-font"]};
    font-weight: normal;
    line-height: 1.3;
    font-size: 0.8rem;

    height: 1.4rem;
    width: 1.5rem;
    border-radius: 50%;
    background-color: ${props => props.theme["orange-800"]};

    padding-top: 0.2rem;

    text-decoration: none;
    display: inline-block;
}
`