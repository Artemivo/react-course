import React from "react";
import { useSelector } from "react-redux";
import { Card, Container, Grid } from "semantic-ui-react";
import ProductItem from "../components/ProductItem";

function Products() {
  const products = useSelector((state) => state.products.list);
  return (
    <Container>
      <Card.Group itemsPerRow={4}>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </Card.Group>
    </Container>
  );
}

export default Products;
