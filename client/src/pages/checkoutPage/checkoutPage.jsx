import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotalSum,
} from "../../redux/cart/cart-selector";

import TakeMoney from "../../components/stripe-button/stripe-button";
import CheckoutItem from "../../components/checkoutItem/checkoutItem";

import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
  WarningContainer,
} from "./checkoutPage.styles";

export const CheckoutPage = ({ cartItems, total, history }) => (
  <CheckoutPageContainer>
    <CheckoutHeaderContainer>
      <HeaderBlockContainer>
        <span>Product</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Name</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Quantity</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Price</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Remove</span>
      </HeaderBlockContainer>
    </CheckoutHeaderContainer>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <TotalContainer>Total: {total}zł</TotalContainer>
    <WarningContainer>
      <p>FOR PAYMENTS USE NEXT TEST CARD:</p>
      <p>4242 4242 4242 4242 exp: 09/25 CVC:111 </p>
    </WarningContainer>
    {total === 0 ? null : <TakeMoney price={total} history={history} />}
  </CheckoutPageContainer>
);
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotalSum,
});

export default connect(mapStateToProps)(CheckoutPage);
