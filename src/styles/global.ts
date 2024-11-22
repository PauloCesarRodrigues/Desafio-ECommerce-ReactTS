import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


body{
  background: ${props => props.theme['white-400']};
  color: ${props => props.theme['brown-600']};
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}

  body,input,text area, button{
    font-family: 'Roboto', sans-serif;
    font-weight: 900;
    font-size: 1rem;
}
`