import styled from "styled-components";

export const BenefitWrapper = styled.div`
  background: rgba(167, 146, 254, 0.07);
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
  }
`;
export const BenefitContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
export const BenefitLeft = styled.div`
  flex: 1;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 100px;
`;

export const BenefitRight = styled.div`
  flex: 1;
  background-color: #ffffff;
  flex: 1;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 100px;
`;

export const BenefitContent = styled.div`
  margin-bottom: 3rem;
`;
export const BenefitImage = styled.img`
  margin-bottom: 1.5rem;
  background: ${(props) => props.background};
  border-radius: ${(props) => props.borderRadius};
  padding: ${(props) => props.padding};
  width: ${(props) => props.width};
  height: ${(props) => props.height} ;
`;

export const ChoiceTitle = styled.h3`
  font-family: "CeraPro";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 112.5%;
  color: #232c35;
`;
export const ChoiceDesc = styled.p`
  margin-top: 1rem;
  width: 300px;
  font-family: "CeraPro";
  font-weight: 500;
  font-size: 18px;
  line-height: 120%;
  letter-spacing: -0.01em;
  color: #4f4f4f;
`;
