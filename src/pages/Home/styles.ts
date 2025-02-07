import styled from "styled-components";
import  Background  from './assets/Background.png'


export const BackgroundStyled = styled.div`
  background-image: url(${Background});
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 100vh;
  z-index: 1;

  @media screen and (max-width: 1500px){
    min-width: 1500px
  }
`;

export const Main = styled.div`
  width: 100%;
  max-width: 1120px;

  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  flex-direction: column;
`;

export const MainContent = styled.div`
  position: absolute;
  top: 200px;

  display: grid;
  grid-template-columns: 2fr 1fr;

  z-index: 999;
  box-sizing: border-box;

  margin: 0 2rem 2rem 7rem;


  img {
    width: 29.75rem;
    height: 22.5rem;
    margin-right: 15rem;
  }

  @media screen and (max-width: 1500px) {
    &{
      display: flex;
      align-items: center;
    }

    img {
      display: none;
      margin-right: 0rem;
    }
  }
`;


export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 3rem;
  box-sizing: border-box;

  @media screen and (max-width: 1500px) {
    margin-right: 10rem;
  }
`


export const Content_Text = styled.div`
  h1{
    font-family: ${props => props.theme["title-font"]};
    font-size: 48px;
    line-height: 1.3;
    font-weight: 900;
    -webkit-text-stroke: 2.5px ${props => props.theme["brown-900"]};
    margin-bottom: 1rem;
    letter-spacing: 0.2rem;
    flex-wrap: nowrap;
  }

  p{
    font-family: ${props => props.theme["default-font"]};
    font-size: 1.25rem;
    line-height: 1.3;
    font-weight: normal;
    color: ${props => props.theme["brown-700"]};
    margin-bottom: 4rem;
    flex-wrap: nowrap;
  }
`


export const Advantages_Section = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr;
  right: auto;
  box-sizing: border-box;
`

export const Advantages = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.25rem;

  p{
    color: ${props => props.theme["brown-500"]};
    font-family: ${props => props.theme["default-font"]};
    font-size: 1rem;
    font-weight: normal;
  }
`

const ICONS_BACKGROUND_COLOR = {
  orange: 'orange-500', 
  yellow: 'orange-800', 
  brown: 'brown-700',    
  purple: 'purple-500'   
} as const;

interface BGColorProps {
  $bgcolor: keyof typeof ICONS_BACKGROUND_COLOR;
}

export const AdvantagesIcon = styled.div<BGColorProps>`
  box-sizing: border-box;
  height: 32px;
  width: 32px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.75rem;
  color: ${props => props.theme["white-100"]};
  background-color: ${({ $bgcolor, theme }) => theme[ICONS_BACKGROUND_COLOR[$bgcolor]]};
`;

