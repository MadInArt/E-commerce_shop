import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux'

import { ReactComponent as Logo } from "../../assets/logo.svg";
import { auth } from "../../firebase/firebase.utils";

import "./navbar.scss";

const Navbar = ({ currentUser }) => (
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
    </div>
  </div>
);

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Navbar);
