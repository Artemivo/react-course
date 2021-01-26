import React from "react";
import LoadingOverlay from "../../home-work-2/LoadingOverlay";
import {
  Link,
  Route,
  Switch,
  useParams,
  useRouteMatch,
  Redirect,
} from "react-router-dom";
import useData from "../hooks/useData";
import {
  Container,
  GridColumn,
  List,
  Grid,
  Header,
  Icon,
} from "semantic-ui-react";

export default function Post() {
  const { userId } = useParams();
  const [posts, isLoading, error] = useData(`/users/${userId}/posts`, []);
  if (error && error.status === 404) {
    console.log(error);
    return <Redirect to={`google.com`} />;
  }

  return (
    <Container>
      <LoadingOverlay active={isLoading} />
      {posts && (
        <Grid>
          <Grid.Column width={10}>
            <List divided relaxed>
              {posts.map((post) => (
                <List.Item>
                  <List.Content>
                    <Link to={`/posts/${post.id}`}>
                      <List.Header as="a">{post.title}</List.Header>
                    </Link>
                    <List.Description as="a">{post.body}</List.Description>
                  </List.Content>
                </List.Item>
              ))}
            </List>
          </Grid.Column>
        </Grid>
      )}
    </Container>
  );
}
