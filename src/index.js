import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import { BrowserRouter } from "react-router-dom";
import CoronaApi from "./services/corona-api";

const coronaApi = new CoronaApi();

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App coronaApi={coronaApi} />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
