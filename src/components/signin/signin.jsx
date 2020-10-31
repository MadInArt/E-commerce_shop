import React from "react";
import { connect } from "react-redux";
import CustomButton from "../../components/button/button";
import InputForm from "../../components/inputform/inputform";
import "./signin.scss";

import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user-action";
class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  onSubmitHandle = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    const { emailSignInStart } = this.props;

    emailSignInStart(email, password);
  };
  onChangeHadnle = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { email, password } = this.state;
    const { googleSignInStart } = this.props;
    return (
      <div className="sign-in-container">
        <h1>I already have an account</h1>
        <span>Sign in with existing email and password</span>

        <form onSubmit={this.onSubmitHandle}>
          <InputForm
            name="email"
            type="email"
            label="Email"
            value={email}
            onChange={this.onChangeHadnle}
            required
          />
          <InputForm
            name="password"
            label="password"
            type="Password"
            value={password}
            onChange={this.onChangeHadnle}
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
  }
}
const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
