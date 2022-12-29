import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  ${normalize}
  
  body {
    background-color: #000000;
  }
  
  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }
  
  ul {
    list-style: none;
  }

  button {
    appearance: none;
    border: none;
    outline: none;
  }
`;

export default GlobalStyle;
