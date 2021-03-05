import React from "react";
import { Menu, Icon, Button } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import CartSummary from "./CartSummary";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/slices/auth";


function Navbar() {
  const authUser = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const productInCart = useSelector((state) => state.cart);
  const summ = productInCart.reduce(
    (sum, product) => sum + 1 * product.count,
    0
  );
  const clearUser = () => {
    dispatch(login(null));
    window.sessionStorage.clear();
  };
  

  if (authUser) {
    return (
      <Menu>
        <NavLink
          to="/products"
          exact
          className="item"
          activeClassName="active-nav"
        >
          Products
        </NavLink>

        <NavLink to="/cart" className="item" activeClassName="active-nav">
          <Icon name="shopping basket" />
          <span className="basket-count">{summ}</span>
        </NavLink>
        <NavLink to="/cart" className="item" activeClassName="active-nav">
          <CartSummary />
        </NavLink>

        <NavLink
          onClick={clearUser}
          to="/"
          className="item"
          activeClassName="active-nav"
        >
          <Button>Exit</Button>
        </NavLink>
      </Menu>
    );
  }
  return (
    <Menu>
      <NavLink
        as="button"
        to="/signup"
        exact
        className="item"
        activeClassName="active-nav"
      >
        Sign Up
      </NavLink>

      <NavLink
        as="button"
        to="/signin"
        exact
        className="item"
        activeClassName="active-nav"
      >
        Sign In
      </NavLink>
    </Menu>
  );
}

export default Navbar;
