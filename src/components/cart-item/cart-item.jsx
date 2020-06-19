import React from "react";

import "./cart-item.scss";

const CartItem = ({ cartItem: { imageUrl, name, price, quantity } }) => (
  <div className='cart-item'>
    <img src={imageUrl} alt="item" />
    <div className='item-details'>
      <span className='name'>{name}</span>
      <span>{`${quantity} x ${price}zł`}</span>
    </div>
  </div>
);

export default CartItem;
