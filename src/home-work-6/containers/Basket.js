import React from 'react';
import {useSelector} from 'react-redux';
import {getProductsInCart} from '../redux/selectors/cart';
import {Header} from 'semantic-ui-react';
import BasketList from '../components/Basket'

 function Basket() {
    const productsInCart = useSelector(getProductsInCart);
    console.log(productsInCart)
    if (productsInCart.length === 0) {
        return (
          <Header as='h2'>Go and buy something</Header>
        )
     }
   
     return (
       <BasketList cartProducts={productsInCart} />
     );
}

export default Basket;