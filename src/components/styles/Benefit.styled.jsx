import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const BenefitWrapper = styled.div`
  background: rgba(167, 146, 254, 0.07);
  @media (max-width: ${({ theme }) => theme.mobile.md}px) {
    /* width: 960px; */
  }
  @media (max-width: ${({ theme }) => theme.mobile.sm}px) {
    /* width: 768px; */
  }
  @media (max-width: ${({ theme }) => theme.mobile.xs}px) {
    /* width: 600px; */
  }
  @media (max-width: ${({ theme }) => theme.mobile.xxs}px) {
    /* width: 450px; */
    flex-direction: column;
  }

  h1 {
    color: #232c35;
    font-family: "CeraPro";
    font-weight: 700;
    font-size: 36px;
    position: absolute;
    top: 1876px;
    width: 1450px;
    text-align: center;
    margin: 0 auto;
    @media (max-width: 1024px) {
      top: 1900px;
      right: 10px;
      width: 900px;
    }
    @media (max-width: ${({ theme }) => theme.mobile.md}px) {
      top: 2050px;
      width: 900px;
    }
    @media (max-width: ${({ theme }) => theme.mobile.sm}px) {
      /* display: none; */
      top: 1780px;
      font-size: 25px;
      width: 400px;
    }
  }
`;
export const BenefitContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: ${({ theme }) => theme.mobile.md}px) {
    flex-direction: column;
    /* padding: 40px; */
  }
  @media (max-width: ${({ theme }) => theme.mobile.sm}px) {
  }
  @media (max-width: ${({ theme }) => theme.mobile.xs}px) {
  }
`;
export const BenefitLeft = styled.div`
  flex: 1;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 170px;
  @media (max-width: ${({ theme }) => theme.mobile.md}px) {
    flex-direction: row;
    padding: 150px 0px;
    gap: 5rem;
  }
  @media (max-width: ${({ theme }) => theme.mobile.sm}px) {
    flex-direction: column;
  }
  @media (max-width: ${({ theme }) => theme.mobile.xs}px) {
    flex-direction: column;
  }
`;

export const BenefitRight = styled.div`
  flex: 1;
  background-color: #ffffff;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 170px;
  @media (max-width: ${({ theme }) => theme.mobile.md}px) {
    flex-direction: row;
    padding: 150px 0px;
    gap: 5rem;
  }
  @media (max-width: ${({ theme }) => theme.mobile.sm}px) {
    flex-direction: column;
  }
  @media (max-width: ${({ theme }) => theme.mobile.xs}px) {
    flex-direction: column;
  }
`;

export const BenefitContent = styled.div`
  margin-bottom: 3rem;
  @media (max-width: ${({ theme }) => theme.mobile.sm}px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  @media (max-width: ${({ theme }) => theme.mobile.xs}px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;
export const BenefitImage = styled.img`
  margin-bottom: 1.5rem;
  background: ${(props) => props.background};
  border-radius: ${(props) => props.borderRadius};
  padding: ${(props) => props.padding};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  animation: ${rotate} 2s linear infinite;
  @media (max-width: ${({ theme }) => theme.mobile.sm}px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: ${({ theme }) => theme.mobile.xs}px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ChoiceTitle = styled.h3`
  font-family: "CeraPro";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  color: #232c35;
  @media (max-width: ${({ theme }) => theme.mobile.sm}px) {
    font-size: 24px;
  }
`;
export const ChoiceDesc = styled.p`
  margin-top: 1rem;
  width: 300px;
  font-family: "CeraPro";
  font-weight: 500;
  font-size: 18px;
  line-height: 120%;
  color: #4f4f4f;
  @media (max-width: ${({ theme }) => theme.mobile.sm}px) {
    width: 450px;
    font-size: 22px;
  }
  @media (max-width: ${({ theme }) => theme.mobile.xs}px) {
    width: 290px;
    font-size: 18px;
  }
`;
