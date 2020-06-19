import { cartActions } from "./cart-constants";

export const setToggleCart = () => ({
  type: cartActions.TOGGLE_CART,
});

export const addItem = (item) => ({
  type: cartActions.ADD_ITEM_TO_CART,
  payload: item,
});

export const removeItemsFromCart = (item) => ({
  type: cartActions.REMOVE_ITEM_FROM_CART,
  payload: item,
});
