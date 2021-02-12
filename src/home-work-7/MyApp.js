import React, { useEffect } from "react";
import { Provider } from "react-redux";
import createStore from "./redux/createStore";
import { Container, Menu } from "semantic-ui-react";
import Comments from "./conteiners/Comments";
import './home-work-7.css'
import {
  BrowserRouter as Router,
  NavLink,
  Switch,
  Route,
} from "react-router-dom";
import Home from "../home-work-6/containers/Home";
import axios from "axios";



const store = createStore();

function MyApp() {


  return (
    <Provider store={store}>
      <Router>
        <Container>
          <Menu>
            <NavLink to='/' className='item'>Home Page</NavLink>
            <NavLink to='/comments' className='item'>Comments</NavLink>
          </Menu>
          <Switch>
            <Route path='/' exact>
              <Home />
            </Route>
            <Route path='/comments' exact>
              <Comments />
            </Route>
          </Switch>
        </Container>
      </Router>
    </Provider>
  );
}

export default MyApp;
