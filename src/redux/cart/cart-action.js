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

export const decreaseItemQuantity = (item) => ({
  type: cartActions.DECREASE_ITEM_QUANTITY,
  payload: item,
});
export const clearCart = () => ({
  type: cartActions.CLEAR_CART,
});
export const updateCartInFirebase = () => ({
  type: cartActions.UPDATE_CART_IN_FIREBASE,
});

export const setCartFromFirebase = (cartItems) => ({
  type: cartActions.SET_CART_FROM_FIREBASE,
  payload: cartItems,
});
