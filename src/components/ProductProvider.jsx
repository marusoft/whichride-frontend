import React from "react";
import Iphone from "../assests/images/iPhoneX2.png"
import { Product, ProviderDesc, ProductGuide, ProductImageGuide, ProductTextGuide } from "./styles/Product";

const ProductProvider = () => {
  return (
    <Product>
      <ProviderDesc>
        <h3>
          Whichride brings together multiple ride hailing providers and local
          taxi firms in one app
        </h3>
        <p>
          Allowing riders to select the provider that offers the best price,
          service or travel time, then seamlessly book within the app
        </p>
      </ProviderDesc>
      <ProductGuide>
        <ProductImageGuide>
          <img src={Iphone} alt="how to use product guide avatar" />
        </ProductImageGuide>
        <ProductTextGuide></ProductTextGuide>
      </ProductGuide>
    </Product>
  );
};

export default ProductProvider;
