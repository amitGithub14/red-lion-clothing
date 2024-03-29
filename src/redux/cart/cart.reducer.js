import { cartActionTypes } from "./cart.types";
import {
  cartItemToAdd,
  cartItemsToRemoveFromCart,
  cartItemsToRemove,
} from "./cart.utils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};
const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case cartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: cartItemToAdd(state.cartItems, action.payload),
      };
    case cartActionTypes.REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: cartItemsToRemoveFromCart(state.cartItems, action.payload),
      };
    case cartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: cartItemsToRemove(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
