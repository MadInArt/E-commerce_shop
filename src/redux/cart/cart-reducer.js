import { cartToggleTypes, addItemToCart } from "./cart-constants";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartToggleTypes.TOGGLE_CART:
      return {
        ...state,
        hidden: !state.hidden,
      };
      case addItemToCart.ADD_ITEM_TO_CART:
        return {
            ...state,
            cartItems: [...state.cartItems, action.payload]
        };
    default:
      return state;
   
  }
};
export default cartReducer;
