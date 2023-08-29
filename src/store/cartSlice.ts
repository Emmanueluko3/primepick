import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";
import { HYDRATE } from "next-redux-wrapper";

export interface CartItem {
  id: string;
  imageUrls: string[];
  title: string;
  category: string;
  condition: string;
  price: number;
  location: string;
  phone: string;
  description: string;
  specification: string[];
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
      action: { payload: CartItem | undefined; type: any }
    ) {
      if (action.payload) {
        state.cartItems.push(action.payload);
      }
    },

    remove(state, action: { payload: CartItem | undefined; type: any }) {
      if (action.payload) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload!.id
        );
      }
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
