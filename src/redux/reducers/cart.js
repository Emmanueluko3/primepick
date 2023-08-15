const cartReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        cart: {
          ...state.cart,
          [action.payload.name]: action.payload,
        },
      };

    case "REMOVE":
      const updatedCart = { ...state.cart };
      delete updatedCart[action.payload.name];

      return {
        ...state,
        cart: updatedCart,
      };

    case "CLEAR":
      return {
        ...state,
        cart: {},
      };

    default:
      return state;
  }
};

export default cartReducer;
