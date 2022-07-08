import styled from "styled-components";

export const IntroWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5rem;
  padding: 0 150px;
  margin-bottom: -3.5rem;
  @media (max-width: ${({ theme }) => theme.mobile.md}px) {
    justify-content: center;
    flex-direction: column;
  }
  @media (max-width: ${({ theme }) => theme.mobile.sm}px) {
    padding: 0 190px;
    justify-content: center;
    flex-direction: column;
  }
  @media (max-width: ${({ theme }) => theme.mobile.xs}px) {
    padding: 0 210px;
    justify-content: center;
    flex-direction: column;
   
  }
`;
export const IntroLeft = styled.div`
  flex: 1;
  h2 {
    width: 450px;
    font-family: "CeraPro";
    font-weight: 700;
    font-size: 48px;
    color: ${({ theme }) => theme.colors.headingColor};
    margin-bottom: 1.2rem;
    @media (max-width: ${({ theme }) => theme.mobile.md}px) {
      text-align: center;
    }
    @media (max-width: ${({ theme }) => theme.mobile.sm}px) {
      font-size: 30px;
      width: 400px;
      text-align: center;
      margin: 0 auto;
    }
    @media (max-width: ${({ theme }) => theme.mobile.xs}px) {
      font-size: 25px;
      width: 390px;
      text-align: center;
      margin: 0 auto;
    }
  }
  p {
    width: 350px;
    font-family: "CeraPro";
    font-weight: 400;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.paragraphColor};
    @media (max-width: ${({ theme }) => theme.mobile.md}px) {
      width: 500px ;
      text-align:center;
    }
    @media (max-width: ${({ theme }) => theme.mobile.sm}px) {
      font-size: 18px;
      width: 400px;
      text-align: center;
      margin: 0 auto;
    }
    @media (max-width: ${({ theme }) => theme.mobile.xs}px) {
      font-size: 18px;
      width: 360px;
      text-align: center;
      margin: 0 auto;
    }
  }
`;
export const IntroRight = styled.div`
  flex: 1;
  @media (max-width: ${({ theme }) => theme.mobile.sm}px) {
    padding: 0 100px;
  }
  img {
    width: 600px;
    @media (max-width: ${({ theme }) => theme.mobile.sm}px) {
      width: 400px;
      text-align: center;
      margin: 0 auto;
      padding: 0 70px;
    }
  }
`;
