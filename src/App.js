import React from "react";
import { ThemeProvider } from "styled-components";
import Navbar from "./components/Navbar";

const theme = {
  colors: {
    header: "#ffffff",
    navItemsColor: "#2C3539",
    body: "#ffffff",
    productDesc: "#5C1A8D",
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
        <Navbar />
      </>
    </ThemeProvider>
  );
};

export default App;
