import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const LogoTextWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  /* pointer-events: none;
  animation: ${rotate} infinite 6s linear; */
  h1 {
    margin-left: 0.9rem;
  }
`;


export const AnimatedLogo = styled.img`
  pointer-events: none;
  animation: ${rotate} infinite 6s linear;
`;
