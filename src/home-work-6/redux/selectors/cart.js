import { createSelector } from 'reselect';

export const getProductsInCart = createSelector(
  state => state.products,
  state => state.cart,
  (products, cart) => {
    const result = cart.map(cartItem => {
      const {id, photo, price, name , albumname} = products.find(product => product.id === cartItem.id);
      return {
        id, count: cartItem.count, photo, price, name , albumname
      }
    });
    return result;
  }
);

export const getTotalCount = createSelector(
  getProductsInCart,
  productsInCart => {
    return productsInCart.reduce((sum, product) => {
      return sum + (1 * product.count)
    }, 0)
  }
)

export const getTotalPrice = createSelector(
  getProductsInCart,
  productsInCart => {
    const result = productsInCart.reduce((sum, product) => {
      return sum + (product.price * product.count)
    }, 0);
    return result;
  }
);