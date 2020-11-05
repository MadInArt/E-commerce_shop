import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { setToggleCart } from "../../redux/cart/cart-action";

import { selectCartItemsCount } from "../../redux/cart/cart-selector";


import {
  CartContainer,
  ShoppingIcon,
  ItemCountContainer
} from './cart-icon.styles';


const CartIcon = ({ setToggleCart, itemCount }) => (
  <CartContainer onClick={setToggleCart}>
    <ShoppingIcon/>
    <ItemCountContainer>{itemCount}</ItemCountContainer>
  </CartContainer>
);

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
  setToggleCart: () => dispatch(setToggleCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
