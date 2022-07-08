import styled from "styled-components";

export const Product = styled.div`
  /* position: absolute; */
  background-color: ${({ theme }) => theme.colors.productProviderBg};
  width: 1440px;
  height: 1110px;
  /* margin-top: -0.6rem; */
  /* z-index: 1000; */
  @media (max-width: ${({ theme }) => theme.mobile.xs}px) {
    margin-bottom: 1.5rem;
    height: 1270px;
  }
`;

export const ProviderDesc = styled.div`
  text-align: center;
  padding-top: 8rem;
  margin: 50px 0;
  /* padding: 70px; */
  @media (max-width: ${({ theme }) => theme.mobile.md}px) {
  }
  h3 {
    width: 614px;
    margin: 0 auto;
    font-family: "CeraPro";
    font-weight: 700;
    font-size: 36px;
    color: #ffffff;
    @media (max-width: ${({ theme }) => theme.mobile.sm}px) {
      width: 310px;
      margin: 0 60px;
      font-size: 30px;
    }
    @media (max-width: ${({ theme }) => theme.mobile.xs}px) {
      text-align: center;
      width: 320px;
      font-size: 20px;  
    }
  }
  p {
    width: 430px;
    font-family: "CeraPro";
    margin: 0 auto;
    font-weight: 500;
    font-size: 20px;
    color: #e0e0e0;
    margin-top: 1.5rem;
    @media (max-width: ${({ theme }) => theme.mobile.md}px) {
      width: 500px;
      margin: 0 100px;
      padding: 25px;
    }
    @media (max-width: ${({ theme }) => theme.mobile.sm}px) {
      width: 380px;
      margin: 0 20px;
      font-size: 30px;
    }
    @media (max-width: ${({ theme }) => theme.mobile.xs}px) {
      text-align: center;
      font-size: 18px;
      width: 390px;
      /* margin: 2rem; */
    }
  }
`;

export const ProductGuide = styled.div`
  display: flex;
  align-items: center;
  padding: 0 180px;
  @media (max-width: ${({ theme }) => theme.mobile.md}px) {
    flex-direction: column;
    width: 850px;
  }
  @media (max-width: ${({ theme }) => theme.mobile.sm}px) {
    width: 600px;
    flex-direction: column;
  }
  @media (max-width: ${({ theme }) => theme.mobile.xs}px) {
      width: 420px;
    }
  
`;
export const ProductImageGuide = styled.div`
  flex: 1;
  img {
    @media (max-width: ${({ theme }) => theme.mobile.md}px) {
      display: none;
    }
  }
`;
export const ProductTextGuide = styled.div`
  flex: 1;
  @media (max-width: ${({ theme }) => theme.mobile.md}px) {
  }
  @media (max-width: ${({ theme }) => theme.mobile.xs}px) {
  }
`;
export const GuideWrapper = styled.div`
  display: flex;
  @media (max-width: ${({ theme }) => theme.mobile.xs}px) {
    flex-direction: column;
  }
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
    @media (max-width: ${({ theme }) => theme.mobile.sm}px) {
      font-size: 20px;
    }
    @media (max-width: ${({ theme }) => theme.mobile.xs}px) {
      margin-top: .5rem ;
  }
  }
  p {
    width: 379px;
    font-size: 17px;
    color: #ffffff;
    @media (max-width: ${({ theme }) => theme.mobile.sm}px) {
      font-size: 16px;
    }
    @media (max-width: ${({ theme }) => theme.mobile.xs}px) {
      width: 270px;
    }
  }
`;
