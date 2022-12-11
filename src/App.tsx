import React from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./components/GlobalStyle";
import MainPage from "./pages/MainPage";
import theme from "./theme";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <div className="page-wrapper">
        {/*<header>header</header>*/}
        <MainPage />
      </div>
    </ThemeProvider>
  );
};

export default App;
