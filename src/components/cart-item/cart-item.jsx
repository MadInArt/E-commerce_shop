import React from "react";

import s from "./cart-item.module.scss";

const CartItem = ({ item: { imageUrl, name, price, quantity } }) => (
  <div className={s.item}>
    <img src={imageUrl} alt="item" />
    <div className={s.details}>
      <span className={s.name}>{name}</span>
      <span className={s.price}>{`${quantity} x ${price}zł`}</span>
    </div>
  </div>
);

export default CartItem;
