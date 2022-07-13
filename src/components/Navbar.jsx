import React, { useState } from "react";
import Logo from "./Logo";
import {
  NavbarContainer,
  NavList,
  NavListItem,
  Menu,
} from "./styles/Navbar.styled";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const openMenu = () => setOpen(!open);

  return (
    <NavbarContainer>
      <Logo />
      <NavList open={open}>
        <NavListItem>The App</NavListItem>
        <NavListItem>About Us</NavListItem>
        <NavListItem>Get in Touch</NavListItem>
      </NavList>
      <Menu open={open} onClick={openMenu}>
        <div />
        <div />
        <div />
      </Menu>
    </NavbarContainer>
  );
};

export default Navbar;
