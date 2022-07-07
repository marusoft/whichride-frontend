import styled from "styled-components";

export const SubscribeWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.subscribeBg};
  width: 1440px;
  height: 389px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (max-width: ${({ theme }) => theme.mobile.md}px) {
    width: 700px;
  }
  @media (max-width: ${({ theme }) => theme.mobile.sm}px) {
    width: 570px;
  }
  @media (max-width: ${({ theme }) => theme.mobile.xs}px) {
    width: 420px;
  }
`;
export const SubscribeTitle = styled.h3`
  width: 411px;
  font-family: "CeraPro";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  color: #232c35;
  margin-bottom: 1rem;
  @media (max-width: ${({ theme }) => theme.mobile.xs}px) {
    text-align: center;
  }
`;
export const SubscribeDesc = styled.p`
  width: 475px;
  font-family: "CeraPro";
  font-weight: 400;
  font-size: 20px;
  text-align: center;
  color: #233533;
  margin-bottom: 1rem;
  @media (max-width: ${({ theme }) => theme.mobile.xs}px) {
    text-align: center;
    font-size: 16px;
    width: 390px;
  }
`;
export const SubscribeForm = styled.form`
  margin-top: 1rem;
  input {
    border: none;
    outline: none;
    width: 342px;
    height: 48px;
    border: 2px solid #ffffff;
    padding: 0.9rem;
    font-size: 16px;
    line-height: 12px;
    background-color: ${({ theme }) => theme.colors.subscribeBg};
    color: ${({ theme }) => theme.colors.body};
    ::placeholder,
    ::-webkit-input-placeholder {
      color: ${({ theme }) => theme.colors.body};
      font-size: 0.97rem;
    }
    @media (max-width: ${({ theme }) => theme.mobile.xs}px) {
      display: flex;
      flex-direction: column;
      text-align: center;
      width: 350px;
    }
  }
  button {
    margin-left: 0.7rem;
    border: none;
    width: 157px;
    height: 48px;
    background: ${({ theme }) => theme.colors.subscribeBtn};
    color: ${({ theme }) => theme.colors.body};
    font-size: 16px;
    line-height: 12px;
    @media (max-width: ${({ theme }) => theme.mobile.xs}px) {
      text-align: center;
      width: 300px;
     margin: 1rem 1.2rem;
    }
  }
`;
