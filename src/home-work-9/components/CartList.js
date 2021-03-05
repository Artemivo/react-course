import React from "react";
import { useDispatch } from "react-redux";
import { Button, Card, Container, Image } from "semantic-ui-react";
import { addProductToCard, removeProductFromCart } from "../redux/slices/cart";

function CartList({ product }) {
  const dispatch = useDispatch();
  const removeProduct = () =>
    product.count === 1
      ? window.confirm("Are you sure you want to remove the product") &&
        dispatch(removeProductFromCart(product.id))
      : dispatch(removeProductFromCart(product.id));

  return (
    <Container>
      <Card>
        <Card.Content>
          <Image floated="right" size="mini" src={product.image} />
          <Card.Header>{product.category}</Card.Header>
          <Card.Description>
            {`${product.price} $ x ${product.count} = ${
              product.price * product.count
            }`}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className="ui two buttons">
            <Button
              onClick={() => {
                dispatch(addProductToCard(product.id));
              }}
              basic
              color="green"
            >
              Add more
            </Button>
            <Button onClick={removeProduct} basic color="red">
              Remove
            </Button>
          </div>
        </Card.Content>
      </Card>
    </Container>
  );
}

export default CartList;
