import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk to fetch all products from the API
export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  return res.json();
});

// Async thunk to fetch a single product by its ID
export const fetchProductById = createAsyncThunk(
  "products/fetchById",
  async (id) => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    return res.json();
  }
);

// Create the product slice
const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [],              // All products
    selectedProduct: null,  // A single selected product (for details page)
    status: "idle",         // Tracks loading state: 'idle' | 'loading' | 'succeeded' | 'failed'
  },
  extraReducers: (builder) => {
    builder
      // Handle fetchProducts lifecycle
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.status = "failed";
      })

      // Handle fetchProductById lifecycle
      .addCase(fetchProductById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.selectedProduct = action.payload;
      })
      .addCase(fetchProductById.rejected, (state) => {
        state.status = "failed";
      });
  },
});


export default productSlice.reducer;
