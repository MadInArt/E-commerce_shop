import React from "react";
import { connect } from "react-redux";

import {
  removeItemsFromCart,
  addItem,
  decreaseItemQuantity,
} from "../../redux/cart/cart-action";

import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer,
} from "./checkoutitem.styles";

export const CheckoutItem = ({
  cartItem,
  clearItem,
  removeItem,
  increaseItemQuantity,
}) => {
  const { imageUrl, name, quantity, price } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt="item" />
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <div onClick={() => removeItem(cartItem)}>&#10092;</div>
        <span>{quantity}</span>
        <div onClick={() => increaseItemQuantity(cartItem)}> &#10093;</div>
      </QuantityContainer>
      <TextContainer>{price}zł</TextContainer>
      <RemoveButtonContainer onClick={() => clearItem(cartItem)}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};
const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(removeItemsFromCart(item)),
  removeItem: (cartItem) => dispatch(decreaseItemQuantity(cartItem)),
  increaseItemQuantity: (cartItem) => dispatch(addItem(cartItem)),
});
export default connect(null, mapDispatchToProps)(CheckoutItem);
