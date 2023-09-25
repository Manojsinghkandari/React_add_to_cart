import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addCart: [],
};

const AddCartSlice = createSlice({
  name: "counterSlice",
  initialState,
  reducers: {
    add: (state, action) => {
      console.log(action);
      state.addCart.push(action.payload);
    },
  },
});

export const { add } = AddCartSlice.actions;
export default AddCartSlice.reducer;
