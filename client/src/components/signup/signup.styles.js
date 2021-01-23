import styled from "styled-components";

export const SignUpContainer = styled.div`
  width: 430px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 800px) {
    align-items: center;
    justify-content: center;
    button {
      margin: auto;
    }
  }
`;
export const SignUpTitle = styled.span`
  margin: 10px 0;
`;
