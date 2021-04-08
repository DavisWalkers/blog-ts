import { createGlobalStyle } from 'styled-components';
import { variables } from '../static/variables';
 
const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    height: 100%;

    font-family: "New York", sans-serif;

    background-color: ${variables.lightGray};
  }

  a {
    text-decoration: none;

    color: inherit;
  }

  * {
    box-sizing: border-box;
  }
`;
 
export default GlobalStyle;