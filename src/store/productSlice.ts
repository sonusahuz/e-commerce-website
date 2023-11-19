import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../utils/index";

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    orderProducts(state, action) {
      state.order.push(action.payload);
    },

    setLogin(state, action) {
      state.isLogin = action.payload;
    },

    setProdCatgeory(state, action) {
      state.prodCategory = action.payload;
    },
    setSearchProducts(state, action) {
      state.searchProduct = action.payload;
    },
    addToCart: (state, action) => {
      const { id } = action.payload;
      const existingProduct = state.cart.find((prod) => prod.id === id);

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeToCart: (state, action) => {
      const { id } = action.payload;
      const existingProduct = state.cart.find((prod) => prod.id === id);

      if (existingProduct) {
        if (existingProduct.quantity > 1) {
          existingProduct.quantity -= 1;
        } else {
          state.cart = state.cart.filter((prod) => prod.id !== id);
        }
      }
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const productAction = productSlice.actions;

export default productSlice.reducer;
