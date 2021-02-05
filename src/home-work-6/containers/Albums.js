import React from 'react';
import { useSelector } from "react-redux";
import { Container, Card } from "semantic-ui-react";
import AlbumItem from "../components/AlbumItem";

function Products() {
  const products = useSelector(state => state.products);
  return (
    <Container>
      <Card.Group>
        {products.map(product => <AlbumItem key={product.id} product={product}/>)}
      </Card.Group>
    </Container>
  );
}

export default Products;