import styled from "styled-components";

export const FooterWrapper = styled.div`
  /* width: 1440px; */
  height: 73px;
  background: #deb63d;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: #ffffff;
  @media (max-width: ${({ theme }) => theme.mobile.md}px) {
    /* width: 960px; */
  }
  @media (max-width: ${({ theme }) => theme.mobile.sm}px) {
    /* width: 768px; */
    flex-direction: column;
  }
  @media (max-width: ${({ theme }) => theme.mobile.xs}px) {
    /* width: 600px; */
  }
  @media (max-width: ${({ theme }) => theme.mobile.xxs}px) {
    /* width: 450px; */
    flex-direction: column;
  }
`;
export const AllRight = styled.span`
  @media (max-width: ${({ theme }) => theme.mobile.sm}px) {
    font-size: 1rem;
    margin-top: 0.7rem;
  }
`;
export const TermandCondition = styled.p`
  @media (max-width: ${({ theme }) => theme.mobile.sm}px) {
    font-size: 1rem;
    margin-botton: 1rem;
  }
`;
