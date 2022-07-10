import React, { useState } from "react";
import { useSpring, animated, config } from "react-spring";
import { IntroWrapper, IntroLeft, IntroRight } from "./styles/Intro.styled";
import ThreePhone from "../assests/images/threephone.png";

const Intro = () => {
  const [flip, set] = useState(false);
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    delay: 200,
    config: config.molasses,
    onRest: () => set(!flip),
  });

  return (
    <IntroWrapper>
      <IntroLeft>
        <animated.h2 style={props}>Compare & book ride-hailing providers </animated.h2>
        <p>
          Save money and time with WhichrRide. Think Compare the market but for
          taxis.
        </p>
      </IntroLeft>
      <IntroRight>
        <img src={ThreePhone} alt="three phone display" />
      </IntroRight>
    </IntroWrapper>
  );
};

export default Intro;
