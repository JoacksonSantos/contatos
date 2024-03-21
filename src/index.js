import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import contactReducer from "./redux/reducers/contactReducer";
import { createStore } from "redux";
import { Provider } from "react-redux";
//import { composeWithDevTools } from "@redux-devtools/extension/lib/types/logOnly";

const store = createStore(contactReducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
