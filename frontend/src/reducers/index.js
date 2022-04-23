import { combineReducers } from "redux";
import items from './items';
import auth from './auth';
import shop from './shop';

export const reducers = combineReducers({ items, auth, shop });