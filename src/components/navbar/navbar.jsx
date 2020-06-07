import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";

import "./navbar.scss";

const Navbar = () => (
  <div className="header">
    <Link to="/" className="logo-container">
      <Logo className='logo'/>
    </Link>
    <div className="links">
      <Link to="/shop">SHOP</Link>
      <Link to="/contact">CONTACT</Link>
    </div>
  </div>
);

export default Navbar;
