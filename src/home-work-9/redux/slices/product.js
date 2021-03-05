import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data;
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    loading: false,
    list: [],
    error: null,
  },
  redusers: {},
  extraReducers: {
    [fetchProducts.pending]: (state) => {
      state.loading = true;
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.loading = false;
      state.list = action.payload;
    },
    [fetchProducts.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export default productSlice.reducer;
export { fetchProducts };
