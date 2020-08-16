import { cartActionTypes } from "./cart.types";

export const toggleCartHidden = (hidden) => ({
  type: cartActionTypes.TOGGLE_CART_HIDDEN,
});
