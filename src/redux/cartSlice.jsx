import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "Addtocart",
  initialState: { cart: [] },
  reducers: {
    addtoCart: (state, actions) => {
      const exist = state.cart.find((key) => key.id === actions.payload.id);
      if (exist) {
        alert("Product already added...");
      } else {
        state.cart.push(actions.payload);
        alert("Product successfully added...");
      }
    },
    Increase: (state, actions) => {
      for (let i = 0; i < state.cart.length; i++) {
        if (state.cart[i].id === actions.payload.id) {
          state.cart[i].quantity++;
        }
      }
    },
    Decrease: (state, actions) => {
      for (let i = 0; i < state.cart.length; i++) {
        if (state.cart[i].id === actions.payload.id) {
          if (state.cart[i].quantity <= 1) {
            alert("Quantity ");
          } else {
            state.cart[i].quantity--;
          }
        }
      }
    },
    removeItem: (state, actions) => {
      state.cart = state.cart.filter((item) => item.id != actions.payload.id);
    },
  },
});

export const { addtoCart, Increase, Decrease, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
