import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART } from "../actions/cart";

let initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART: {
      const basketProduct = state.find(cartProduct => cartProduct.id === action.payload);
      if (!basketProduct) return [...state, { id: action.payload, count: 1 }];
      return state.map(cartProduct => cartProduct === basketProduct ? ({ ...basketProduct, count: basketProduct.count + 1 }) : cartProduct)
    }
    case REMOVE_PRODUCT_FROM_CART: {
      const basketProduct = state.find(cartProduct => cartProduct.id === action.payload);
      if (basketProduct.count === 1) {
        return state.filter(cartProduct => cartProduct.id !== action.payload);
      }
      return state.map(cartProduct => cartProduct === basketProduct ? ({ ...basketProduct, count: basketProduct.count - 1 }) : cartProduct)
    }
    default: return state;
  }
};
