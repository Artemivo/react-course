import React from "react";
import { Container, Header, Menu, Button, Label, Icon, Grid} from "semantic-ui-react";
import {
  BrowserRouter as Router,
  NavLink,
  Switch,
  Route,
} from "react-router-dom";
import Home from './containers/Home';
import Albums from './containers/Albums';
import Basket from './containers/Basket';
import { useSelector } from "react-redux";
import { getTotalCount } from "./redux/selectors/cart";
import CartSummary from './components/CartSummary';

export default function MusicShop() {
  const count = useSelector(getTotalCount);
  return (
    <Container>
      <Router>
          <Menu>
          <NavLink to='/' className='item'>Home page</NavLink>
          <NavLink to='/albums' className='item'>Albums</NavLink>

          <NavLink to='/basket' className='item'>
          <Icon name="shopping basket" /> 
            <span className = "basket-count">{count}</span>
            <CartSummary />
         </NavLink>
         

          </Menu>
          <Switch>
              <Route path = '/' exact>
                <Home />
              </Route>
              <Route path = '/albums' exact>
                  <Albums />
              </Route>
              <Route path = '/basket' exact>
                  <Basket />
              </Route>
          </Switch>

      </Router>
    </Container>
  );
}
