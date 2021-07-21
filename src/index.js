import React from "react";
import ReactDOM from "react-dom";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootSaga from "./reducers/saga";
import createSagaMiddleware from "@redux-saga/core";
import rootReducer from "./reducers";

import "./index.css";
import App from "./App";

const sagaMiddleware = createSagaMiddleware();
const rootElement = document.getElementById("root");

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
sagaMiddleware.run(rootSaga);
