import { Provider } from "react-redux";
import createStore from "./redux/createStore";
import React from "react";
import Routes from "./Routes";

const store = createStore();

function AppShop() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}
export default AppShop;
