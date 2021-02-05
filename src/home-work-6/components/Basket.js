import React from "react";
import { Card } from "semantic-ui-react";
import BasketItem from "./BasketItem";
import { useEffect, useState } from "react";

export default function BasketList({ cartProducts }) {
  const albums = cartProducts;
  const serialObj = JSON.stringify(albums);
  localStorage.setItem("productsInBasket", serialObj);
const [data, setData] = useState();
useEffect(() => {
    const returnObj = JSON.parse(localStorage.getItem("productsInBasket"));
    setData(returnObj);
  }, []);

  return (
    <Card.Group>

      {albums.map(album => (
          <BasketItem key={album.id} album={album} />
        ))} 
      </Card.Group>
  );
}
