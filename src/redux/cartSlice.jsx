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
  },
});

export const { addtoCart } = cartSlice.actions;
export default cartSlice.reducer;
