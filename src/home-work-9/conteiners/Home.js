import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Container, Message } from "semantic-ui-react";

function Home() {
  const authUser = useSelector((state) => state.auth.user);
  return (
    <Container>
      {authUser && (
        <Message positive>
          <Message.Header>
            Welcome, please visit <Link to="/products">store</Link>
          </Message.Header>
          <p>and be sure to buy something</p>
        </Message>
      )}
      {!authUser && (
        <Message warning>
          <Message.Header>
            Hello, please <Link to="/signin">login</Link> to see products
          </Message.Header>
          <p>
            Or <Link to="/signup">sign up</Link> if you haven't already
          </p>
        </Message>
      )}
    </Container>
  );
}

export default Home;
