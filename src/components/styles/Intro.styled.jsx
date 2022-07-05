import styled from "styled-components";

export const IntroWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5rem;
  padding: 0 150px;
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
  }
  p {
    width: 350px;
    font-family: "CeraPro";
    font-weight: 500;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.paragraphColor};
  }
`;
export const IntroRight = styled.div`
  flex: 1;
  img {
    width: 600px;
  }
`;
