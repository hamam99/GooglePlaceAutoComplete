import { applyMiddleware, createStore } from 'redux';
import combineReducers from './index';
import thunk from 'redux-thunk';

export const store = createStore(combineReducers, applyMiddleware(thunk));
