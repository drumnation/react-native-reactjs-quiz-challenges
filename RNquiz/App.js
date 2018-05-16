import React, { Component } from "react";

import { Provider } from "react-redux";
import Router from "./router";
import createStoreWithMiddleware from "./store";

const store = createStoreWithMiddleware();

const App = props =>
  <Provider store={store} >
    <Router />
  </Provider>

export default App;