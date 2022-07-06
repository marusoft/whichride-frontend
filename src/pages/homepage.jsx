import React from "react";
import Benefit from "../components/Benefit";
import Intro from "../components/Intro";
import Navbar from "../components/Navbar";
import ProductProvider from "../components/ProductProvider";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Intro />
      <ProductProvider />
      <Benefit />
    </>
  )
}

export default HomePage