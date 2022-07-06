import React from "react";
import Benefit from "../components/Benefit";
import Footer from "../components/Footer";
import Intro from "../components/Intro";
import Navbar from "../components/Navbar";
import ProductProvider from "../components/ProductProvider";
import Subscribe from "../components/Subscribe";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Intro />
      <ProductProvider />
      <Benefit />
      <Subscribe />
      <Footer />
    </>
  )
}

export default HomePage;