import { createSelector } from "reselect";
import { getProducts } from "./products";

export const getProductInCart = createSelector(
    getProducts,
    (state => state.cart),
    (products,cart)=>{
        const result = cart.map(cartItem => {
            const {id,image,category,price} = products.find(product =>product.id === cartItem.id);
            return {id, image,category,price, count: cartItem.count};
        });
        return result;
    }

)