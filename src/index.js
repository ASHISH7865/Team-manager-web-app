import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { Provider } from "react-redux";
import store from "./app/store";

ReactDom.render(
  <BrowserRouter>
  <Provider store={store}>
      <App />
  </Provider>
    </BrowserRouter>,
  document.getElementById("root")
);
