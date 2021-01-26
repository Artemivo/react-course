import React from "react";
import useData from "../hooks/useData";
import { Container, GridColumn, List, Grid, Header, Icon } from "semantic-ui-react";
import {
  Link,
  Route,
  Switch,
  useParams,
  useRouteMatch,
  Redirect,
} from "react-router-dom";
import LoadingOverlay from "../../home-work-2/LoadingOverlay";
import PostDetails from "./PostDetails";

export default function Posts() {
  const [posts, isLoading, error] = useData("/posts", []);
  const { path, url } = useRouteMatch();
  if (error && error.status === 404) {
    console.log(error);
    return <Redirect to={`/posts`}/>
  }


  return (
    <Container>
      <LoadingOverlay active={isLoading} />
      {posts && (
        <Grid>
          <Grid.Column width={6}>
            <List divided relaxed>
              {posts.map((post) => (
                <List.Item>
                  <Link to={`/users/${post.userId}`}>
                    <List.Icon
                      name="address card outline"
                      size="large"
                      verticalAlign="middle"
                    />{"Take user info  "}
                    
                  </Link>
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
          <Grid.Column width={8}>
          <Switch>
            <Route exact path={path}>
            <Header as='h2'>
    <Icon name='settings' />
    <Header.Content>
      Select a post
    </Header.Content>
  </Header>
              
            </Route>
            <Route path={`${path}/:postId`}>
              <PostDetails />
            </Route>
          </Switch>
          </Grid.Column>
        </Grid>
      )}
    </Container>
  );
}
