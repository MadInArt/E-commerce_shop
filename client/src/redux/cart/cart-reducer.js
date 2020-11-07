import { cartActions } from "./cart-constants";
import { addItemsToCart, decreaseItemsFromCart } from "./cart-utils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActions.TOGGLE_CART:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case cartActions.ADD_ITEM_TO_CART:
      return {
        ...state,
        cartItems: addItemsToCart(state.cartItems, action.payload),
      };
    case cartActions.DECREASE_ITEM_QUANTITY:
      return {
        ...state,
        cartItems: decreaseItemsFromCart(state.cartItems, action.payload),
      };
    case cartActions.REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    case cartActions.CLEAR_CART:
      return {
        ...state,
        cartItems: [],
      };
      case cartActions.SET_CART_FROM_FIREBASE:
      return {
        ...state,
        cartItems: action.payload
      };
    default:
      return state;
  }
};
export default cartReducer;
