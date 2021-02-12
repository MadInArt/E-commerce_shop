import React from "react";
import DocumentTitle from "react-document-title";

import SignIn from "../../components/signin/signin";
import SignUp from "../../components/signup/signup";

import { SignInAndSignUpContainer } from "./signInRegisterPage.styles";

const signInRegisterPage = () => (
  <DocumentTitle title="GreenLand | Login">
  <SignInAndSignUpContainer>
    <SignIn />
    <SignUp />
  </SignInAndSignUpContainer>
  </DocumentTitle>
);
export default signInRegisterPage;
