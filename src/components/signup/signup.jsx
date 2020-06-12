import React from "react";

import CustomButton from "../../components/button/button";
import InputForm from "../../components/inputform/inputform";
import "./signup.scss";

import { auth, createUserProfileDoc } from "../../firebase/firebase.utils";

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  onSubmitHandle = async event => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Your passwords don't match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDoc(user, { displayName });
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log(error, "error during creating new account");
    }
  };
  onChangeHadnle = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up-container">
        <h1>I don't have an account</h1>
        <span>Sign up with new email and password</span>

        <form onSubmit={this.onSubmitHandle}>
          <InputForm
            name="displayName"
            label="Name"
            value={displayName}
            onChange={this.onChangeHadnle}
            required
          />
          <InputForm
            name="email"
            label="Email"
            type="email"
            value={email}
            onChange={this.onChangeHadnle}
            required
          />
          <InputForm
            name="password"
            type="password"
            label="Password"
            value={password}
            onChange={this.onChangeHadnle}
            required
          />
          <InputForm
            name="confirmPassword"
            label="Confirm password"
            type="password"
            value={confirmPassword}
            onChange={this.onChangeHadnle}
            required
          />
          <CustomButton type="submit"> Sign up </CustomButton>
        </form>
      </div>
    );
  }
}
export default SignUp;
