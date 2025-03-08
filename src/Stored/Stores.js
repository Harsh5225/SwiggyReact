import CartReducer from "./CartSlicer"
import { configureStore } from "@reduxjs/toolkit"

export const store=configureStore({
  reducer:{
    cartSlice:CartReducer,
  }
})