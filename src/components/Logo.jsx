import React from "react";
import WhichRideLogo from "../assests/brand/logo.png";
import { LogoTextWrapper } from "./styles/Logo.styled";

const Logo = () => {
  return (
    <>
      <LogoTextWrapper>
        <img src={WhichRideLogo} alt="whichride logo" />
        <h1>whichride</h1>
      </LogoTextWrapper>
    </>
  );
};

export default Logo;
