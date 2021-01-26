import React from "react";
import LoadingOverlay from "../../home-work-2/LoadingOverlay";
import {
  Link,
  Route,
  Switch,
  useParams,
  useRouteMatch,
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
  const [todos, isFetching] = useData(`/users/${userId}/todos`, []);

  return (
    <Container>
      <LoadingOverlay active={isFetching} />
      {todos && (
        <Grid>
          <Grid.Column width={10}>
            <List divided relaxed>
              {todos.map((todo) => (
                <List.Item>
                  <List.Content>
                    <List.Header>{todo.title}</List.Header>

                    <List.Description as="a">
                      {todo.completed ? (
                        <Icon name="thumbs up outline" />
                      ) : (
                        <Icon name="thumbs down outline" />
                      )}
                    </List.Description>
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
