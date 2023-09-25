import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const fetchProduct = createAsyncThunk("home/fetchProduct", async () => {
  const resObj = await fetch("https://fakestoreapi.com/products");
  const data = await resObj.json();
  return data;
});

const CartSlice = createSlice({
  name: "CartSlice",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      console.log(action.payload);
      state.cart = action.payload;
    });
  },
});

export default CartSlice.reducer;
