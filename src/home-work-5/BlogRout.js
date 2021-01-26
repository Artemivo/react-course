import React from 'react';
import { Container, Header, Menu  } from 'semantic-ui-react';
import { BrowserRouter as Router, NavLink, Switch, Route } from "react-router-dom";
import Home from "./containers/Home";
import Users from "./containers/Users";
import About from "./containers/About";
import UserDetails from "./containers/UserDetails";
import PostsDetails from './containers/PostDetails'
import Posts from "./containers/Posts";
import NotFound from "./containers/NotFound";
import ScrollToTop from './containers/ScrollToTop'


export default function BlogRout () {
  return (
    <Container>
      <Router>
        <Menu>
          <NavLink to='/' className='item'>Home page</NavLink>
          <NavLink to='/users' className='item'>Users</NavLink>
          <NavLink to='/about' className='item'>About</NavLink>
          <NavLink to='/posts' className='item'>Posts</NavLink>
          
        </Menu>
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/users' exact>
          <ScrollToTop />
            <Users />
          </Route>
          <Route path='/users/:userId'>
          <ScrollToTop />
            <UserDetails />
          </Route>
          <Route path='/about' exact>
            <About />
          </Route>
          <Route path='/posts' >
          <ScrollToTop />
            <Posts />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </Container>
  )
}
