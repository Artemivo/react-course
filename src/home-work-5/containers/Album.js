import React from "react";
import { useParams, Redirect } from "react-router-dom";
import { Container, Header, Image } from "semantic-ui-react";
import useData from "../hooks/useData";
import LoadingOverlay from "../../home-work-2/LoadingOverlay";
import Glide from "../../home-work-3/Glide";

function Album() {
  const { userId, albumId } = useParams();
  const [album, , error] = useData(`/albums/${albumId}`, {});
  const [photos, isLoading] = useData(`/albums/${albumId}/photos`, []);

  if (error && error.status === 404) {
    console.log(error);
    return <Redirect to={`/users/${userId}`} />;
  }

  return (
    <Container>
      <LoadingOverlay active={isLoading} />
      <Header>{album.title}</Header>
      {photos.length > 0 && (
        <Glide>
          {photos.map((photo) => (
            <Image src={photo.url} rounded />
          ))}
        </Glide>
      )}
    </Container>
  );
}

export default Album;
