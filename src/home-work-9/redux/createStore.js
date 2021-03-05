import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import productsReducer from "./slices/product";
import authReducer from "./slices/auth";
import cartReducer from "./slices/cart";

export default () => {
  return configureStore({
    reducer: {
      cart: cartReducer,
      products: productsReducer,
      auth: authReducer,
    },
    middleware: [...getDefaultMiddleware()],
    devTools: true,
  });
};
