import { combineReducers, createStore, applyMiddleware } from "redux";
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import calendar from './reducers/calendar';
import session from './reducers/session';
import recipes from './reducers/recipes';

const rootReducer = combineReducers({
  calendar,
  session,
  recipes
})

export default createStore(rootReducer, applyMiddleware(...[logger, thunk]));
