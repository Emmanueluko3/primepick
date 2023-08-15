import { combineReducers } from "redux";
import cartReducer from "./cart";
import authReducer from "./auth";

const allReducers = combineReducers({
  cart: cartReducer,
  auth: authReducer,
});

export default allReducers;
