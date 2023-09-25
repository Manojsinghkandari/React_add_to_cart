import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Feature/cartSlice";
import addCartReducer from "./Feature/addCartSlice";

const Store = configureStore({
  reducer: {
    carts: cartReducer,
    add: addCartReducer,
  },
});

export default Store;
