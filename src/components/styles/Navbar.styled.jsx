import styled from "styled-components";

export const NavbarWrapper = styled.div``;
export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 70px;
  margin-top: 2rem;
  height: 50px;
`;
export const NavList = styled.ul`
  display: flex;
  align-items: center;
`;
export const NavListItem = styled.li`
  margin-right: 1.5rem;
  font-family: "CeraPro";
  font-weight: 700;
  font-size: 17px;
  color: ${({ theme }) => theme.colors.navItemsColor};
  cursor: pointer;
  @media (max-width: ${({ theme }) => theme.mobile.md}px) {
    display: none;
  }
`;
