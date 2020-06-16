import { cartToggleTypes, addItemToCart } from './cart-constants';

export const setToggleCart = () => ({
    type: cartToggleTypes.TOGGLE_CART,
})

export const addItem = item => ({
    type: addItemToCart.ADD_ITEM_TO_CART,
    payload: item
})