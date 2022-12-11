import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  ${normalize}
  
  body {
    background-color: #000000;
  }
`;

export default GlobalStyle;
