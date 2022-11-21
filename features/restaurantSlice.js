import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  restaurant: {
    id: null,
    imgURL: null,
  }
};

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
   setRestraunt: (state, action) => {
    state.restaurant = action.payload;
   },
  },
});

export const { setRestraunt } = restaurantSlice.actions;
export const selectRestraunt = (state) => state.restaurant.restaurant;

export default restaurantSlice.reducer;
