import React from "react";
import { useSelector } from "react-redux";
import { getTotalPrice } from "../redux/selectors/cart";
import { Button, Icon, List } from "semantic-ui-react";

function CartSummary() {
  const summ = useSelector(getTotalPrice);
  return (
 
        <Button icon color="green">
          <Icon name="dollar sign" style={{ marginRight: 10 }} />
          {summ}
        </Button>

  );
}

export default CartSummary;
