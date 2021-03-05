import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Container,
  Card,
  Icon,
  Image,
  Button,
  Comment,
} from "semantic-ui-react";
import { addProductToCard, removeProductFromCart } from "../redux/slices/cart";

function ProductItem(props) {
  const product = props.product;
  const [showDescription, setShowDescription] = useState(false);
  const dispatch = useDispatch();

  return (
    <Card>
      <Image src={product.image} size="normal" />
      <Card.Content>
        <Card.Header>{product.category}</Card.Header>
        <Comment.Action
          onClick={() => {
            setShowDescription(!showDescription);
          }}
        >
          {showDescription ? "Close description" : "Show descpription"}
        </Comment.Action>
        {showDescription && (
          <Card.Description>{product.description}</Card.Description>
        )}
      </Card.Content>
      <Card.Content extra>
        <Icon name="dollar sign" />
        Price : {product.price}
      </Card.Content>
      <Button.Group>
        <Button
          onClick={() => {
            dispatch(addProductToCard(product.id));
          }}
          positive
        >
          Buy
        </Button>
        <Button.Or />
        <Button
          onClick={() => {
            dispatch(removeProductFromCart(product.id));
          }}
          color="red"
        >
          Remove
        </Button>
      </Button.Group>
    </Card>
  );
}

export default ProductItem;
