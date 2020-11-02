import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import { selectCartItems } from "../../redux/cart/cart-selector";
import "./cart_dropdown.scss";
import CustomButton from "../button/button";
import CartItem from "../cart-item/cart-item";
import { setToggleCart } from "../../redux/cart/cart-action";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="dropdown">
    <div className="items">
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))
      ) : (
        <span className="message">Your cart is empty</span>
      )}
    </div>
    <CustomButton
      className="button"
      onClick={() => {
        history.push("/checkout");
        dispatch(setToggleCart());
      }}
    >
      GO TO PAYMENT
    </CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});
export default withRouter(connect(mapStateToProps)(CartDropdown));
