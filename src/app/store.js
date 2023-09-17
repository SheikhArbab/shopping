import { configureStore } from "@reduxjs/toolkit";
import {combineReducers} from "redux";
import cartSlice from "../features/cart/cartSlice";
import sideSlice from "../features/sidebar/sideSlice";


const rootReducer = combineReducers({cart: cartSlice,
  side: sideSlice},
  )
export const store = configureStore({
  reducer: rootReducer,
});