import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  ${normalize}
  
  * {
    box-sizing: border-box;
    font-family: 'Noto Sans Kr', sans-serif;
  }
  
  body {
    background-color: #000000;
  }
  
  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }
  
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  button {
    appearance: none;
    border: none;
    outline: none;
    background-color: unset;
  }
  
  a {
    color: inherit;
    text-decoration: none;
    &:visited {
      color: inherit;
      text-decoration: none;
    }
  }
`;

export default GlobalStyle;
