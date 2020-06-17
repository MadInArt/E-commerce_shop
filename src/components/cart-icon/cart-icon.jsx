import React from "react";
import { connect } from "react-redux";

import { setToggleCart } from "../../redux/cart/cart-action";

import "./cart-item.scss";
import { ReactComponent as CartLogo } from "../../assets/cart.svg";
import { selectCartItemsCount } from "../../redux/cart/cart-selector";

const CartIcon = ({ setToggleCart, itemCount }) => (
  <div className="container">
    <CartLogo className="icon" onClick={setToggleCart} />
    <span className="counter">{itemCount}</span>
  </div>
);

const mapStateToProps = (state) => ({
 itemCount : selectCartItemsCount(state)
});

const mapDispatchToProps = (dispatch) => ({
  setToggleCart: () => dispatch(setToggleCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
