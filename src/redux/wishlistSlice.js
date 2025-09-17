import { createSlice } from "@reduxjs/toolkit";

// Slice for managing wishlist state
const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: [], // Wishlist starts as an empty array
  reducers: {
    // Add a product to the wishlist
    // Only adds if the product doesn't already exist
    addToWishlist: (state, action) => {
      const exists = state.find((p) => p.id === action.payload.id);
      if (!exists) state.push(action.payload);
    },

    // Remove a product from the wishlist by ID
    removeFromWishlist: (state, action) => {
      return state.filter((p) => p.id !== action.payload);
    },
  },
});

// Export actions to be used in components
export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;


export default wishlistSlice.reducer;
