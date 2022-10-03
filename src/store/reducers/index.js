import reduceReducers from "reduce-reducers";
import { combineReducers } from "redux";
import cols from "./cols";
import data from "./data";
import search from "./search";

export default reduceReducers(combineReducers({ cols, data, search }));
