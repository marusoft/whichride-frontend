import styled from "styled-components";

export const Product = styled.div`
  /* position: absolute; */
  background-color: ${({ theme }) => theme.colors.productProviderBg};
  width: 1440px;
  height: 1110px;
  /* margin-top: -0.6rem; */
  /* z-index: 1000; */
`;

export const ProviderDesc = styled.div`
  text-align: center;
  margin: 50px 0;
  padding: 70px;
  h3 {
    width: 614px;
    margin: 0 auto;
    font-family: "CeraPro";
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    color: #ffffff;
  }
  p {
    width: 430px;
    font-family: "CeraPro";
    margin: 0 auto;
    font-weight: 500;
    font-size: 20px;
    color: #e0e0e0;
    margin-top: 1.5rem;
  }
`;

export const ProductGuide = styled.div`
  display: flex;
  align-items: center;
  padding: 0 180px;
`;
export const ProductImageGuide = styled.div`
  flex: 1;
`;
export const ProductTextGuide = styled.div`
  flex: 1;
`;
export const GuideWrapper = styled.div`
  display: flex;
`;
export const GuideStep = styled.span`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: ${(props) => props.bg};
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 2.2rem;
`;
export const GuideTextWrapper = styled.div`
  margin-bottom: 4rem;
  font-family: "CeraPro";
  h4 {
    margin-bottom: 1rem;
    font-size: 24px;
    color: #ffffff;
  }
  p {
    width: 379px;
    font-size: 17px;
    color: #ffffff;
  }
`;
