import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 70px;
  margin-top: 2rem;
  height: 50px;
  @media (max-width: ${({ theme }) => theme.mobile.xs}px) {
    padding: 0 25px;
  }
`;
export const NavList = styled.ul`
  display: flex;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.mobile.md}px) {
    padding: 0 120px;
    display: none;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    background: #ffffff;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
    height: 60vh;
    width: 100%;
    text-align: left;
    margin-top: 3.5rem;
    position: absolute;
    top: 30px;
    left: 0;
    z-index: 10;
    transition: all 1s ease;
  }
  @media (max-width: ${({ theme }) => theme.mobile.xs}px) {
    padding: 0 70px;
    }
`;
export const NavListItem = styled.li`
  margin-right: 1.5rem;
  font-family: "CeraPro";
  font-weight: 700;
  font-size: 17px;
  color: ${({ theme }) => theme.colors.navItemsColor};
  cursor: pointer;
  @media (max-width: ${({ theme }) => theme.mobile.md}px) {
    margin-bottom: 1rem;
  }
`;
export const Menu = styled.div`
  display: none;
  @media (max-width: ${({ theme }) => theme.mobile.md}px) {
    cursor: pointer;
    display: block;
    padding: 8px;
    div {
      width: 35px;
      height: 5px;
      background-color: #232c35;
      margin: 6px 0;
      transition: 0.5s;
      :first-child {
        transform: ${({ open }) =>
          open
            ? "rotate(-45deg) translate(-9px, 6px)"
            : "rotate(0) translate(0)"};
      }
      :nth-child(2) {
        opacity: ${({ open }) => (open ? "0" : "1")};
      }
      :nth-child(3) {
        transform: ${({ open }) =>
          open
            ? "rotate(45deg) translate(-8px, -8px)"
            : "rotate(0) translate(0)"};
      }
    }
  }
`;
