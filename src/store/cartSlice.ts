import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";
import { HYDRATE } from "next-redux-wrapper";

export interface CartItem {
  productId: String;
  quantity: number;
  price: number;
}

export interface Cart {
  cartItems: CartItem[];
}

const initialState = {
  cartItems: [] as CartItem[],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem(
      state = initialState,
      action: { payload: CartItem; type: any }
    ) {
      console.log("item pushed to cart");
      state.cartItems.push(action.payload);
      console.log("state: ", state.cartItems);
    },

    remove(state, action: { payload: CartItem; type: any }) {
      state.cartItems = state.cartItems.filter(
        (item) => item.productId !== action.payload.productId
      );
    },

    empty(state, action) {
      state.cartItems = [] as CartItem[];
    },
  },

  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.cart,
      };
    },
  },
});

export const { addCartItem, empty, remove } = cartSlice.actions;

export const selectCartState = (state: AppState) => state;

export default cartSlice.reducer;
