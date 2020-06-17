import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import CartItem from "../cart-icon/cart-icon";
import CartDropdown from "../cart_dropdown/cart_dropdown";
import { auth } from "../../firebase/firebase.utils";

import "./navbar.scss";

const Navbar = ({ currentUser, hidden }) => (
  <div className="header">
    <Link to="/" className="logo-container">
      <Logo className="logo" />
    </Link>
    <div className="links">
      <Link to="/shop">SHOP</Link>
      <Link to="/contact">CONTACT</Link>
      {currentUser ? (
        <div className="links" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="links" to="/signin">
          SIGN IN
        </Link>
      )}
      <CartItem/>
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
});

export default connect(mapStateToProps)(Navbar);
