import React from "react";

import {
  CartItemContainer,
  ItemDetailsContainer,
  CartItemImage,
} from "./cart-item.styles";

export const CartItem = ({ cartItem: { imageUrl, name, price, quantity } }) => (
  <CartItemContainer>
    <CartItemImage src={imageUrl} alt="item" />
    <ItemDetailsContainer>
      <span>{name}</span>
      <span>{`${quantity} x ${price}zł`}</span>
    </ItemDetailsContainer>
  </CartItemContainer>
);

export default CartItem;
