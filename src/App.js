import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Navbar from "./components/navbar/navbar";
import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop";
import SignInRegisterPage from "./pages/signinRegisterPage/signInRegisterPage";
import CheckoutPage from "./pages/checkoutPage/checkoutPage";

import "./App.css";

import { selectCurrentUser } from "./redux/user/user-selector";

class App extends React.Component {
  unsubscribeFromAuth = null;

  // componentDidMount() {

  // //   this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
  // //     if (userAuth) {
  // //       const userRef = await createUserProfileDocument(userAuth);

  // //       userRef.onSnapshot((snapShot) => {
  // //         setCurrentUser({
  // //           id: snapShot.id,
  // //           ...snapShot.data(),
  // //         });
  // //       });
  // //     }

  // //     setCurrentUser(userAuth);
  // //   });
  // // }

  // // componentWillUnmount() {
  // //   this.unsubscribeFromAuth();
  // // }

  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInRegisterPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(App);
