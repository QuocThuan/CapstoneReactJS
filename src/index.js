import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";

// react-router-dom
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

// redux toolkit
import { Provider } from "react-redux";
import { store } from "./redux/store";
import UserTemplate from "./Template/UserTemplate";
import Home from "./pages/Home/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
