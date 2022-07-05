import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Global";
import HomePage from "./pages/homepage";

const theme = {
  colors: {
    headingColor: "#232c35",
    paragraphColor: "#4f4f4f",
    navItemsColor: "#2C3539",
    body: "#ffffff",
    productProviderBg: "#5C1A8D",
    productLeft: "#A792FE",
    productRight: "#E5E5E5",
    signUpBtn: "#2C3539",
    signUp: "#F2C94C",
    footer: "#DEB63D",
  },
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
      <GlobalStyles />
       <HomePage />
      </>
    </ThemeProvider>
  );
};

export default App;
