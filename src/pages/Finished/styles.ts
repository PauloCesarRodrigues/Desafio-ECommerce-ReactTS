import styled from "styled-components";


export const FinishContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;

  margin-top: 7rem;
  margin-left: 15rem;
`
 
export const FinishContainerInfoColumn = styled.div`

  gap: 1.5rem;

  h2{
    color: ${props => props.theme["orange-800"]};
    font-size: 2rem;
    font-family: ${props => props.theme["title-font"]};
    font-weight: bolder;

    -webkit-text-stroke: 1.7px ${props => props.theme["orange-800"]};
  }

  p{
    color: ${props => props.theme["brown-700"]};
    font-size: 1.5rem;
    font-weight: normal;
    font-family: ${props => props.theme["default-font"]};
  }
`

export const ContainerInfo = styled.div`
  margin-top: 3.5rem;

  height: 22.25rem;
  width: 43.75rem;

  border: 2px solid ${props => props.theme["orange-800"]};
  border-radius: 10px 40px;

`

export const OrderInfoSection = styled.div`
  margin-top: 3.625rem;
  margin-left: 3.125rem;
`

export const OrderInfo = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  gap: 1rem;

  margin-bottom: 3.45rem;
`

const ICONS_BACKGROUND_COLOR = {
  orange: 'orange-500', 
  yellow: 'orange-800', 
  purple: 'purple-500'   
} as const;

interface BGColorProps {
  $bgcolor: keyof typeof ICONS_BACKGROUND_COLOR;
}

export const OrderInfoIcon = styled.div<BGColorProps>`
  color: ${props => props.theme["white-100"]};

  height: 2.875rem;
  width: 2.875rem;

  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ $bgcolor, theme }) => theme[ICONS_BACKGROUND_COLOR[$bgcolor]]};

`

export const OrderInfoDiv = styled.div`

  color: ${props => props.theme["brown-500"]};
  text-align: left;

  p{
    font-size: 1.2rem;
    font-family: ${props => props.theme["default-font"]};
    font-weight: normal;
  }

  span{
    margin-top: 0.2rem;
    font-size: 1.2rem;
    font-family: ${props => props.theme["default-font"]};
    font-weight: bold;
  }

  div{
    display: flex;
    gap: 0.35rem;
  }

`

export const FinishColumnIllustration = styled.div`


  margin-top: 6.7rem;
  margin-right: 15rem;;
`