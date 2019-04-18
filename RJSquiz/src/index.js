import React from "react"
import ReactDOM from "react-dom"

import "semantic-ui-css/semantic.min.css"

import App from "./App"
import registerServiceWorker from "./registerServiceWorker"

const store = {};

ReactDOM.render(<App store={store} />, document.getElementById("root"))
registerServiceWorker()
