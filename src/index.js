import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/sass/index.scss";

// react-router-dom
import { BrowserRouter, Route, Routes } from "react-router-dom";

// redux toolkit
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Home from "./pages/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
