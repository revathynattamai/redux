import { createStore, combineReducers, applyMiddleware } from "redux";
import logger, { createLogger } from "redux-logger";
import math from './reducers/math';
import user from './reducers/user'

const myLogger = (state) => (next) => (action) => {
    console.log(next(action));
}

export default createStore(
    combineReducers({ math, user }),
    {},
    applyMiddleware(myLogger));