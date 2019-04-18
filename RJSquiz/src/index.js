import { enableLogging } from "mobx-logger";

import React from "react";
import ReactDOM from "react-dom";

import "semantic-ui-css/semantic.min.css";

import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import Store from "./models/Store";
import LogRocket from "logrocket";
// import createPlugin from "logrocket-mobx";
import faker from "faker";

const config = {
  action: true,
  compute: true
};

enableLogging(config);

const store = new Store();

const startLogRocket = () => {
  LogRocket.init("yyw69f/draynow-web");

  // const lr = createPlugin(LogRocket);
  // lr.watchObject(store);
  
  const { name, random, internet, company } = faker;
  
  LogRocket.identify(random.uuid(), {
    name: `${name.firstName()} ${name.lastName()}`,
    email: `${internet.email()}`,
    company: `${company.companyName()}`
  });
};

startLogRocket(store);

ReactDOM.render(<App store={store} />, document.getElementById("root"));
registerServiceWorker();
