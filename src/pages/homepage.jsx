import React from "react";
import Intro from "../components/Intro";
import Navbar from "../components/Navbar";
import ProductProvider from "../components/ProductProvider";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Intro />
      <ProductProvider />
    </>
  )
}

export default HomePage