import React, { useState } from "react";
import { connect } from "react-redux";
import CustomButton from "../../components/button/button";
import InputForm from "../../components/inputform/inputform";
import "./signin.scss";

import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user-action";

const SignIn = ({ googleSignInStart, emailSignInStart }) => {
  const [userCredentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const { email, password } = userCredentials;

  const onSubmitHandle = async (event) => {
    event.preventDefault();
    emailSignInStart(email, password);
  };

  const onChangeHadnle = (event) => {
    const { value, name } = event.target;
    setCredentials({
      ...userCredentials,
      [name]: value,
    });
  };

  return (
    <div className="sign-in-container">
      <h1>I already have an account</h1>
      <span>Sign in with existing email and password</span>

      <form onSubmit={onSubmitHandle}>
        <InputForm
          name="email"
          type="email"
          label="Email"
          value={email}
          onChange={onChangeHadnle}
          required
        />
        <InputForm
          name="password"
          label="password"
          type="Password"
          value={password}
          onChange={onChangeHadnle}
          required
        />
        <div className="buttons">
          <CustomButton type="submit"> Sign in </CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
