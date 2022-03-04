import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./redux/root_reducer";
import CoronaAPI from "./services/corona-api";

const coronaAPI = new CoronaAPI();

const store = createStore(rootReducer);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <React.StrictMode>
        <App coronaAPI={coronaAPI} />
      </React.StrictMode>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
