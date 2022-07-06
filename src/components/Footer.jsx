import React from "react";
import {
  FooterWrapper,
  AllRight,
  TermandCondition,
} from "./styles/Footer.styled";

const Footer = () => {
  return (
    <FooterWrapper>
      <AllRight>© 2020 Whichride - All rights reserved.</AllRight>
      <TermandCondition>Privacy Policy Terms and Conditions</TermandCondition>
    </FooterWrapper>
  );
};

export default Footer;
