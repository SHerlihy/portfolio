import currentPage from "./currentPage";
import viewVertical from "./viewVertical";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  currentPage,
  viewVertical,
});

export default allReducers;
