import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import cartReducer from "./cartSlice";
import wishlistReducer from "./wishlistSlice";

export const store = configureStore({
  reducer: {
    products: productReducer, // Handles product-related state
    cart: cartReducer,        // Handles cart-related state
    wishlist: wishlistReducer,  // Handles wishlist-related state
  },
});
