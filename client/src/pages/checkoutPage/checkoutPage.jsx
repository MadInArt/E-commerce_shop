import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotalSum,
} from "../../redux/cart/cart-selector";

import TakeMoney from "../../components/stripe-button/stripe-button";
import CheckoutItem from "../../components/checkoutItem/checkoutItem";
import "./checkoutPage.scss";

const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Name</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className="total">Total: {total}zł</div>
    <div className="payments-alert">
      <p>FOR USE PAYMENTS NEXT TEST CARD:</p>
      <p>4242 4242 4242 4242 exp: 09/25 CVC:111 </p>
    </div>

    <TakeMoney price={total} />
  </div>
);
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotalSum,
});

export default connect(mapStateToProps)(CheckoutPage);
