import React from "react";
import Logo from "./Logo";
import {
  NavbarWrapper,
  NavbarContainer,
  NavList,
  NavListItem,
} from "./styles/Navbar.styled";

const Navbar = () => {
  return (
    <NavbarWrapper>
      <NavbarContainer>
        <Logo />
        <NavList>
          <NavListItem>The App</NavListItem>
          <NavListItem>About Us</NavListItem>
          <NavListItem>Get in Touch</NavListItem>
        </NavList>
      </NavbarContainer>
    </NavbarWrapper>
  );
};

export default Navbar;
