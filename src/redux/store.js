import { combineReducers, createStore, applyMiddleware } from "redux";
import logger from 'redux-logger'

import session from './reducers/session';
import foods from './reducers/foods';

const rootReducer = combineReducers({
  session,
  foods
})

export default createStore(rootReducer, applyMiddleware(logger));