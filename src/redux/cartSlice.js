import { createSlice } from "@reduxjs/toolkit";
// Create a slice for cart-related state and logic
const cartSlice = createSlice({
  name: "cart",
  // Initial state: empty cart
  initialState: [],
  reducers: {
    // Add a product to the cart
    // If it already exists, increment its quantity
    addToCart: (state, action) => {
      const item = state.find((p) => p.id === action.payload.id);
      if (item) {
        item.qty += 1;
      } else {
        state.push({ ...action.payload, qty: 1 });
      }
    },
     // Remove a product from the cart by ID
    removeFromCart: (state, action) => {
      return state.filter((p) => p.id !== action.payload);
    },
     // Increase the quantity of a product in the cart
    increaseQty: (state, action) => {
      const item = state.find((p) => p.id === action.payload);
      if (item) item.qty += 1;
    },
     // Decrease the quantity of a product in the cart
    // If quantity is 1, item remains in cart
    decreaseQty: (state, action) => {
      const item = state.find((p) => p.id === action.payload);
      if (item && item.qty > 1) item.qty -= 1;
    },
    // Clear the entire cart
    clearCart: () => [],
  },
});
// Export actions for use in components
export const { addToCart, removeFromCart, increaseQty, decreaseQty, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
