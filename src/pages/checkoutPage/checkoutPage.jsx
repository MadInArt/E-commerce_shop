import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import DocumentTitle from "react-document-title";
import {
  selectCartItems,
  selectCartTotalSum,
} from "../../redux/cart/cart-selector";

import { PayPalButton } from "react-paypal-button-v2";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { PayWithGoogleButton } from "../../components/googlepay-button/googlepay-button";
import CheckoutItem from "../../components/checkoutItem/checkoutItem";

import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
  WarningContainer,
  PaymentsContainer,
} from "./checkoutPage.styles";

export const CheckoutPage = ({ cartItems, total, history }) => {
  return (
    <DocumentTitle title="GreenLand | Checkout">
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
        <TotalContainer>Total: {total}$</TotalContainer>
        <WarningContainer>
          <p>
            KEEP IN MIND, THAT PAYMENTS ARE INTEGRATED JUST FOR DEMOSNTRATIONAL
          </p>
          <p>
            PURPOSES, PLEASE DO NOT CONFIRM ANY PAYMENTS ON THIS WEBSITE !!!
          </p>
        </WarningContainer>
        {total === 0 ? null : (
          <PaymentsContainer>
            <PayPalButton
              amount={total}
              style={{
                layout: "horizontal",
                color: "blue",
                shape: "rect",
                label: "pay",
                height: 40,
                size: "responsive",
              }}
            />
            <PayWithGoogleButton total={total} />
          </PaymentsContainer>
        )}
      </CheckoutPageContainer>
    </DocumentTitle>
  );
};
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotalSum,
});

export default connect(mapStateToProps)(CheckoutPage);
