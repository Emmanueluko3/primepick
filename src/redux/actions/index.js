export const clearCart = () => {
  return {
    type: "CLEAR",
  };
};

export const addToCart = (value) => {
  return {
    type: "ADD",
    payload: value,
  };
};

export const removeFromCart = (value) => {
  return {
    type: "REMOVE",
    payload: value,
  };
};
