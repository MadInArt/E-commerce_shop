import React from "react";
import { connect } from 'react-redux';

import { setToggleCart } from '../../redux/cart/cart-action';

import "./cart-item.scss";
import { ReactComponent as CartLogo } from "../../assets/cart.svg";

const CartIcon = ({setToggleCart}) => (
  <div className="container">
    <CartLogo className="icon"  onClick={setToggleCart}/>
    <span className="counter">0</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  setToggleCart: () => dispatch(setToggleCart())
})

export default connect(null, mapDispatchToProps)(CartIcon);
