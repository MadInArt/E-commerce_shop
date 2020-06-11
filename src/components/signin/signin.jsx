import React from "react";

import CustomButton from "../../components/button/button";
import InputForm from "../../components/inputform/inputform";
import "./signin.scss";

import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  onSubmitHandle = (event) => {
    event.preventDefault();

    this.setState({
      email: '',
      password: '',
    });
  };
  onChangeHadnle = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="sign-in-container">
        <h1>I already have an account</h1>
        <span>Sign in with existing email and password</span>

        <form onSubmit={this.onSubmitHandle}>
          <InputForm
            name="email"
            type="email"
            label="email"
            value={this.state.email}
            onChange={this.onChangeHadnle}
            required
          />
          <InputForm
            name="password"
            label="password"
            type="password"
            value={this.state.password}
            onChange={this.onChangeHadnle}
            required
          />
          <div className="buttons">
            <CustomButton type="submit"> Sign in </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
export default SignIn;
