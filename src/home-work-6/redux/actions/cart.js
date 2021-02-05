export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
export const REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART';


export const addAlbumToBasket = (productId) => ({
  type: ADD_PRODUCT_TO_CART,
  payload: productId
});

export const removeAlbumFromBasket = (productId) => ({
  type: REMOVE_PRODUCT_FROM_CART,
  payload: productId
});


