import { applyMiddleware, compose, createStore } from "redux";

import { apiMiddleware } from "redux-api-middleware";
import { createLogger } from "redux-logger"
import rootReducer from "./src/reducers/index";
import thunk from "redux-thunk";

const loggerMiddleware = createLogger();

const middlewares = [
    apiMiddleware,
    thunk,
    loggerMiddleware
];

const createStoreWithMiddleware = compose(applyMiddleware(...middlewares))(createStore);

export default (initialState = {}) => createStoreWithMiddleware(rootReducer(), initialState);
