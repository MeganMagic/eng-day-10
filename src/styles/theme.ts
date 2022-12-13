import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  breakpoint: {
    mobile: "@media screen",
    tablet: "@media screen and (min-width: 768px)",
    desktop: "@media screen and (min-width: 1280px)",
  },
  color: {
    black: "#000000",
    white: "#ffffff",
  },
};

export default theme;
