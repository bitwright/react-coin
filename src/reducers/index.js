import { combineReducers } from "redux";
import coins from "./coinReducer";
import global from "./globalReducer";

export default combineReducers({
  coins,
  global
});
