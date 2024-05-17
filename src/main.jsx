//import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { getUser, getUsers } from "./state.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>

      <App users={{key_getUser: getUser, key_getUsers: getUsers}}/>

  </BrowserRouter>
);