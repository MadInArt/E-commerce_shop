import React, { useEffect, lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Navbar from "./components/navbar/navbar";
import LoadingSpinner from "./components/loading_spinner/loading_spinner";
import ErrorBoundary from "./components/error_boundary/error_boundary";
import { ToTopButton } from "./components/toTopButton/toTopButton";

import { GlobalStyle } from "./styles.global";
import { selectCurrentUser } from "./redux/user/user-selector";
import { checkUserSession } from "./redux/user/user-action";

const HomePage = lazy(() => import("./pages/homepage/homepage"));
const ShopPage = lazy(() => import("./pages/shop/shop"));
const SignInRegisterPage = lazy(() =>
  import("./pages/signinRegisterPage/signInRegisterPage")
);
const CheckoutPage = lazy(() => import("./pages/checkoutPage/checkoutPage"));

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<LoadingSpinner />}>
            <ToTopButton/>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route exact path="/checkout" component={CheckoutPage} />
            <Route
              exact
              path="/signin"
              render={() =>
                currentUser ? <Redirect to="/" /> : <SignInRegisterPage />
              }
            />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
