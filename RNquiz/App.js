import { Provider } from "react-redux";
import React from "react";
import Router from "./router";
import createStoreWithMiddleware from "./store";

const store = createStoreWithMiddleware();

const App = () => (
  <Provider store={store}>
    <Router />
  </Provider>
);

export default App;
