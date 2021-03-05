import React from "react";
import { useSelector } from "react-redux";
import { Button, Icon } from "semantic-ui-react";
import { getProductInCart } from "../redux/selectors/cart";

export default function CartSummary() {
  const productsInCart = useSelector(getProductInCart);
  const summ = productsInCart.reduce((sum, product) => {
    return sum + product.price * product.count;
  }, 0);

  return (
    <div>
      <Button icon color="green">
        <Icon name="dollar sign" style={{ marginRight: 10 }} />
        {summ.toFixed(2)}
      </Button>
    </div>
  );
}
