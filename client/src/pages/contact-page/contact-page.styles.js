import styled from "styled-components";

const subColor = "grey";

export const MainContainer = styled.div`
  display: flex;
`;
export const ContactData = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  flex: 50%;
`;
export const HeaderContainer = styled.h1`
  position: relative;
  &:after {
    content: "";
    border-bottom: 1px solid ${subColor};
    width: 140px;
    position: absolute;
    display: block;
    left: 50%;
    margin-left: -70px;
    padding-top: 10px;
`;
export const EmailFields = styled.div`
  flex: 50%;
  width: 70%;
  text-align: center;
  justify-content: center;
`;

export const FormContainer = styled.form`
  position: relative;
  padding-left: 25%;
`;

export const FormInputContainer = styled.input`
  background: none;
  justify-content: center;
  background-color: white;
  color: ${subColor};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 70%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};
  margin: 25px 0;
  &:focus {
    outline: none;
  }
`;

export const FormInputLabel = styled.label`
  color: ${subColor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;

`;

export const TextAreaContainer = styled.textarea`
  width: 70%;
  height: 150px;
  padding: 12px 20px;
  box-sizing: border-box;
  display: block;
  border: 1px solid ${subColor};
  border-radius: 4px;
  resize: none;
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width:70%;
  margin-top:10px;
`;
