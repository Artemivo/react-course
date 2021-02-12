import {createStore} from "./redux/createStore";
import { Provider } from "react-redux";
import React from "react";
import MusicShop from "./MusicShop";
import './music-shop.css'


// const store = createStore();

export default function MyShop() {
  return (
    <Provider >
      <MusicShop />
    </Provider>
  );
}

