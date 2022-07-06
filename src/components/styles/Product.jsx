import styled from "styled-components";

export const Product = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.productProviderBg};
  width: 1440px;
  height: 1110px;
  margin-top: -0.6rem;
  z-index: 1000;
`;

export const ProviderDesc = styled.div`
  text-align: center;
  margin: 50px 0;
  padding: 60px;
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

export const ProductGuide = styled.div``
export const ProductImageGuide = styled.div``
export const ProductTextGuide = styled.div``