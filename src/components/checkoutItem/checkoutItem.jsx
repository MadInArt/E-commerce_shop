import React from "react";
import { connect } from "react-redux";

import {
  removeItemsFromCart,
  addItem,
  decreaseItemQuantity,
} from "../../redux/cart/cart-action";
import "./checkoutItem.scss";

const CheckoutItem = ({
  cartItem,
  clearItem,
  removeItem,
  increaseItemQuantity,
}) => {
  const { imageUrl, name, quantity, price } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <div className="quantity">
        <div className="arrow" onClick={() => removeItem(cartItem)}>
          &#10092;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => increaseItemQuantity(cartItem)}>
          {" "}
          &#10093;
        </div>
      </div>
      <span className="price">{price}zł</span>
      <div className="remove-button" onClick={() => clearItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(removeItemsFromCart(item)),
  removeItem: (cartItem) => dispatch(decreaseItemQuantity(cartItem)),
  increaseItemQuantity: (cartItem) => dispatch(addItem(cartItem)),
});
export default connect(null, mapDispatchToProps)(CheckoutItem);
