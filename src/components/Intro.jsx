import React from "react";
import {
  IntroWrapper,
  IntroLeft,
  IntroRight,
} from "./styles/Intro.styled";
import ThreePhone from "../assests/images/threephone.png"

const Intro = () => {
  return (
    <IntroWrapper>
      <IntroLeft>
        <h2>Compare & book ride-hailing providers </h2>
        <p>
          Save money and time with WhichrRide. Think Compare the market but for
          taxis.
        </p>
      </IntroLeft>
      <IntroRight>
        <img src={ThreePhone } alt="three phone display"  />
      </IntroRight>
    </IntroWrapper>
  );
};

export default Intro;
