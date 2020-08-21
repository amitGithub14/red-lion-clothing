export const cartItemToAdd = (cartItems, cartItemToAdd) => {
  const cartItemExists = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (cartItemExists) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const cartItemsToRemove = (cartItems, cartItemToRemove) => {
  if (cartItemToRemove.quantity > 1) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToRemove.id
        ? {
            ...cartItem,
            quantity: cartItem.quantity - 1,
          }
        : cartItem
    );
  }
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
};

export const cartItemsToRemoveFromCart = (cartItems, cartItemToRemove) => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
};
