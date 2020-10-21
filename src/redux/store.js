import { combineReducers, createStore, applyMiddleware } from "redux";
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import session from './reducers/session';
import recipes from './reducers/recipes';

const rootReducer = combineReducers({
  session,
  recipes
})

export default createStore(rootReducer, applyMiddleware(...[logger, thunk]));
