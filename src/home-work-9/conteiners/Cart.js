import React from "react";
import { useSelector } from "react-redux";
import { Container, Image, Transition } from "semantic-ui-react";
import CartList from "../components/CartList";
import CartSummary from "../components/CartSummary";
import { getProductInCart } from "../redux/selectors/cart";

function Cart() {
  const productsInCart = useSelector(getProductInCart);
  if (productsInCart.length === 0) {
    return (
      <Container>
        <Image
          centered
          size="medium"
          src="http://pngimg.com/uploads/shopping_cart/shopping_cart_PNG27.png"
        />
      </Container>
    );
  }
  return (
    <Container>
      <CartSummary />
      {productsInCart.map((product) => (
        <CartList key={product.id} product={product} />
      ))}
    </Container>
  );
}

export default Cart;
