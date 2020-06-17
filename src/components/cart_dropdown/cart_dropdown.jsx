import React from "react";
import { connect } from "react-redux";

import "./cart_dropdown.scss";
import CustomButton from "../button/button";
import CartItem from '../cart-item/cart-item';

const CartDropdown = ({ cartItems }) => (
  <div className="dropdown">
    <div className="items">
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton className="button">GO TO PAYMENT</CustomButton>
  </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});
export default connect(mapStateToProps)(CartDropdown);
