import { Button, Container, Header, Menu } from "semantic-ui-react";
import {
  BrowserRouter as Router,
  Link,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "./components/NavBar";
import Register from "./conteiners/Register";
import Login from "./conteiners/Login";
import Products from "./conteiners/Products";
import Cart from "./conteiners/Cart";
import NotFound from "./conteiners/NotFound";
import Home from "./conteiners/Home";
import { fetchProducts } from "./redux/slices/product";
import { fetchSession, login } from "./redux/slices/auth";
import ProtectRoute from "./conteiners/ProtectedRoute";
import ProtectedRoute from "./conteiners/ProtectedRoute";
import LoadingOverlay from "../home-work-2/LoadingOverlay";

export default function Routes() {
  const [isLoading, setIsLoading] = useState(false);
  const loadState = () => {
    try {
      const serialisedUser = window.sessionStorage.getItem("user_state");
      if (!serialisedUser) return undefined;
      return JSON.parse(serialisedUser);
    } catch (err) {
      return undefined;
    }
  };

  const authUser = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  useEffect(() => {
    setIsLoading(true);
    dispatch(fetchProducts());

    const dataUser = loadState();
    dispatch(login(dataUser))
      .then((result) => {
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  }, []);

  return (
    <Container>
      <LoadingOverlay active={isLoading} />
      <Router>
        <Header>
          <NavLink to="/" activeClassName="active-nav">
            {authUser ? (
              <Button color="purple">{authUser[0].email}</Button>
            ) : (
              <Button color="purple">Shop</Button>
            )}
          </NavLink>
        </Header>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signup" exact component={Register} />
          <ProtectedRoute
            path="/products"
            exact
            component={Products}
            user={authUser}
          />
          <ProtectedRoute path="/cart" exact component={Cart} user={authUser} />
          <Route path="/signin" exact component={Login} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </Container>
  );
}
