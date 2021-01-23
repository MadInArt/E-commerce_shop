import styled from "styled-components";

export const SignInContainer = styled.div`
  width: 430px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 800px) {
    justify-content: center;
    align-items: center;
  }
`;
export const SignInTitle = styled.span`
  margin: 10px 0;
`;
export const ButtonsBarContainer = styled.div`
  display: flex;
  @media screen and (max-width: 800px) {
    * {
      margin: 10px;
    }
    flex-direction: column;
    align-items: center;
  }
`;
