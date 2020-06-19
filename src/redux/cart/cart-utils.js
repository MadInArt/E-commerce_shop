export const addItemsToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
export const decreaseItemsFromCart = (cartItems, cartItemsToDecrease) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemsToDecrease.id
  );
  if (existingCartItem.quantity === 1) {
    return cartItems.filter(
      (cartItem) => cartItem.id !== cartItemsToDecrease.id
    );
  }
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemsToDecrease.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
