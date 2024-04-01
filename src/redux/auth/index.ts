import { createSlice } from "@reduxjs/toolkit";
import { IApp } from "../../types/apps";

type TUserInitialState = {
  name: string;
  cart: IApp[];
};

const initialState: TUserInitialState = {
  name: "Khánh Hoàng",
  cart: [],
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const prevCart = [...state.cart];
      state.cart = [...prevCart, action.payload];
    },
    cleanCart: (state) => {
      state.cart = [];
    },
    removeFromCart: (state, action) => {
      const newCart = state.cart.filter((item) => item.id !== action.payload);
      state.cart = [...newCart];
    },
  },
});

export const { addToCart, cleanCart, removeFromCart } = authSlice.actions;
export default authSlice.reducer;
