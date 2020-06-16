import { cartToggleTypes, addItemToCart } from "./cart-constants";
import { addItemsToCart } from './cart-utils';

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
            cartItems: addItemsToCart(state.cartItems, action.payload)
        };
    default:
      return state;
   
  }
};
export default cartReducer;
