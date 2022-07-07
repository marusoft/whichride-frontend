import React from "react";
import WhichRideLogo from "../assests/brand/logo2.png";
import { LogoTextWrapper, AnimatedLogo } from "./styles/Logo.styled";

const Logo = () => {
  return (
    <>
      <LogoTextWrapper>
        {/* <img src={WhichRideLogo} alt="whichride logo" /> */}
        <AnimatedLogo src={WhichRideLogo} />
        <h1>whichride</h1>
      </LogoTextWrapper>
    </>
  );
};

export default Logo;
