import React from "react";

import SignIn from "../../components/signin/signin";
import SignUp from "../../components/signup/signup";

import { SignInAndSignUpContainer } from "./signInRegisterPage.styles";

const signInRegisterPage = () => (
  <SignInAndSignUpContainer>
    <SignIn />
    <SignUp />
  </SignInAndSignUpContainer>
);
export default signInRegisterPage;
