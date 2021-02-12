import React, { useState } from "react";
import { connect } from "react-redux";
import CustomButton from "../button/button";
import InputForm from "../inputform/inputform";

import { signUpStart } from "../../redux/user/user-action";
import { SignUpContainer, SignUpTitle } from "./signup.styles";

const SignUp = ({ signUpStart }) => {
  const [userCredentials, setuserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { displayName, email, password, confirmPassword } = userCredentials;

  const onSubmitHandle = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Your passwords don't match");
      return;
    }
    signUpStart({ displayName, email, password });
  };

  const onChangeHadnle = (event) => {
    const { value, name } = event.target;
    setuserCredentials({
      ...userCredentials,
      [name]: value,
    });
  };

  return (
    <SignUpContainer>
      <SignUpTitle>I don't have an account</SignUpTitle>
      <span>Sign up with new email and password</span>

      <form onSubmit={onSubmitHandle}>
        <InputForm
          name="displayName"
          label="Name"
          value={displayName}
          onChange={onChangeHadnle}
          required
        />
        <InputForm
          name="email"
          label="Email"
          type="email"
          value={email}
          onChange={onChangeHadnle}
          required
        />
        <InputForm
          name="password"
          type="password"
          label="Password"
          value={password}
          onChange={onChangeHadnle}
          required
        />
        <InputForm
          name="confirmPassword"
          label="Confirm password"
          type="password"
          value={confirmPassword}
          onChange={onChangeHadnle}
          required
        />
        <CustomButton type="submit"> Sign up </CustomButton>
      </form>
    </SignUpContainer>
  );
};
const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
