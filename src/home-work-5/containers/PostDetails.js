import React from "react";
import {
  Link,
  Route,
  Switch,
  useParams,
  useRouteMatch,
  Redirect,
} from "react-router-dom";
import {
  Card,
  Container,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Comment,
} from "semantic-ui-react";
import useData from "../hooks/useData";
import LoadingOverlay from "../../home-work-2/LoadingOverlay";
import Post from "./Post";

export default function PostDetails() {
  const { postId } = useParams();
  const [post, , error] = useData(`/posts/${postId}`, {});
  const [comments, isLoading] = useData(`/posts/${postId}/comments`, []);
  
  if (error && error.status === 404) {
    console.log(error);
    return <Redirect to={`/posts/${postId}`} />;
  }

  return (
    <Container>
      <LoadingOverlay active={isLoading} />
      {post && (
        <List>
          <List.Item>
            <List.Icon name="marker" />
            <List.Content>
              <List.Header as="a">{post.title}</List.Header>
              <List.Description>{post.body}</List.Description>
            </List.Content>
          </List.Item>
        </List>
      )}
      <Comment.Group size="mini">
        <Header as="h3" dividing>
          Comments
        </Header>
        {comments.map((comment) => (
          <Comment>
            <Comment.Avatar
              as="a"
              src="https://react.semantic-ui.com/images/avatar/small/matt.jpg"
            />
            <Comment.Content>
              <Comment.Author as="a">{comment.email}</Comment.Author>
              <Comment.Actions>
                <a>{comment.name}</a>
              </Comment.Actions>
              <Comment.Text>{comment.body}</Comment.Text>
            </Comment.Content>
          </Comment>
        ))}
      </Comment.Group>
    </Container>
  );
}
