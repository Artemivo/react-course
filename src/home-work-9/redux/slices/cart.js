import { createSlice } from "@reduxjs/toolkit";

let initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCard(state, action) {
      const basketProduct = state.find(
        (cartProduct) => cartProduct.id === action.payload
      );
      if (!basketProduct) {
        state.push({ id: action.payload, count: 1 });
      } else {
        basketProduct.count++;
      }
    },

    removeProductFromCart(state, action) {
      const basketProduct = state.find(
        (cartProduct) => cartProduct.id === action.payload
      );
      if (!basketProduct) {
        alert("This item is not in the cart.");
      } else if (basketProduct.count === 1) {
        return state.filter((product) => basketProduct !== product);
      } else {
        basketProduct.count--;
      }
    }
  },
});

export default cartSlice.reducer;
export const { addProductToCard, removeProductFromCart } = cartSlice.actions;
