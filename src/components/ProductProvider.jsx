import React, { useState } from "react";
import { useSpring, animated, config } from "react-spring"
import Iphone from "../assests/images/iPhoneX2.png";
import {
  Product,
  ProviderDesc,
  ProductGuide,
  ProductImageGuide,
  ProductTextGuide,
  GuideWrapper,
  GuideStep,
  GuideTextWrapper,
} from "./styles/Product.styled";

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const ProductProvider = () => {
  const [flip, setFlip] = useState(false);
  const fade = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    delay: 200,
    config: config.default,
    onRest: () => setFlip(!flip),
  });

  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: config.default,
  }));
  return (
    <Product>
      <ProviderDesc>
        <animated.h3 style={fade}>
          Whichride brings together multiple ride hailing providers and local
          taxi firms in one app
        </animated.h3>
        <p>
          Allowing riders to select the provider that offers the best price,
          service or travel time, then seamlessly book within the app
        </p>
      </ProviderDesc>
      <ProductGuide>
        <ProductImageGuide
          onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
          onMouseLeave={() => set({ xys: [0, 0, 1] })}
          style={{
            transform: props.xys.interpolate(trans),
          }}
        >
          <img src={Iphone} alt="how to use product guide avatar" width={450} />
        </ProductImageGuide>
        <ProductTextGuide>
          <GuideWrapper>
            <GuideStep bg="#f2c94c">Step 1</GuideStep>
            <GuideTextWrapper>
              <h4>Enter location</h4>
              <p>
                Enter your destination to see a list of taxi providers near you.
              </p>
            </GuideTextWrapper>
          </GuideWrapper>
          <GuideWrapper>
            <GuideStep bg="#F2F2F2">Step 2</GuideStep>
            <GuideTextWrapper>
              <h4>Find the perfect ride</h4>
              <p>
                Filter results by driver rating, driver sex, waiting times,
                price or speed. Reduce carbon footprint by only showing hybrid
                or electric cars.
              </p>
            </GuideTextWrapper>
          </GuideWrapper>
          <GuideWrapper>
            <GuideStep bg="#F2F2F2">Step 3</GuideStep>
            <GuideTextWrapper>
              <h4>Pay and Save</h4>
              <p>
                Once you select a ride, we search the web for coupons to get you
                an even better deal, then book seemlessly within our app and
                earn points while you ride.
              </p>
            </GuideTextWrapper>
          </GuideWrapper>
        </ProductTextGuide>
      </ProductGuide>
    </Product>
  );
};

export default ProductProvider;
