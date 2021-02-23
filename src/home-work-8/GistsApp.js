import React, { useEffect } from "react";
import createStore from "./redux/createStore";
import { Provider, useSelector } from "react-redux";
import {NavLink, Route,BrowserRouter as Router, Switch } from "react-router-dom";
import { Container, Menu } from "semantic-ui-react";
import Gists from "./conteiners/Gists";
import { fetchAddGists } from "./redux/actions/action";



const store = createStore();
store.dispatch(fetchAddGists("https://api.github.com/gists/public"));

function GistsApp() {
  
  


  return (
    <Provider store={store}>
    <Router>
      <Container>
      <Menu>
      <NavLink to="/" className = "item">Home</NavLink>
        <NavLink to="/gists" className = "item">Gists List</NavLink>

      </Menu>
      <Switch>
          <Route path = "/gists">
          <Gists />
          </Route>
          <Route path="/" exact>Home page</Route>
      </Switch>
        
      </Container>
      </Router>
    </Provider>
  );
}

export default GistsApp;
