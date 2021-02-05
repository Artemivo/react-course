import React from "react";
import { Button, Card, Image, Icon } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { addAlbumToBasket, removeAlbumFromBasket } from "../redux/actions/cart";

function BasketItem({ album }) {
  const dispatch = useDispatch();
  const addAlbum = () => dispatch(addAlbumToBasket(album.id));
  const removeAlbum = () =>
    album.count === 1
      ? window.confirm("It's last album im your basket") &&
        dispatch(removeAlbumFromBasket(album.id))
      : dispatch(removeAlbumFromBasket(album.id));

  return (
    
      <Card>
        <Card.Content>
          <Image floated="right" size="mini" src={album.photo} />
          <Card.Header>{album.name}</Card.Header>
          <Card.Meta>{album.albumname}</Card.Meta>
          <Card.Description>
            <span className="basket-item-text">
              {album.price}$ x {album.count} = {album.price * album.count}$
            </span>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className="ui two buttons">
            <Button basic color="green" onClick={addAlbum}>
              <Icon name="plus" />
            </Button>
            <Button basic color="red" onClick={removeAlbum}>
              <Icon name="minus" />
            </Button>
          </div>
        </Card.Content>
      </Card>

  );
}

export default BasketItem;
