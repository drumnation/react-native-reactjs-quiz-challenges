import {enableLogging} from "mobx-logger";
import React from "react";
import ReactDOM from "react-dom";

import "semantic-ui-css/semantic.min.css";

import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import Store from "./models/Store";

const config = {
  action: true,
  compute: true
};
enableLogging(config);

const store = new Store();
ReactDOM.render(<App store={store} />, document.getElementById("root"));
registerServiceWorker();
