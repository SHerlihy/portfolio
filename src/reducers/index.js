import currentPage from "./currentPage";
import viewVertical from "./viewVertical";
import adWord from "./adWord";
import carouselPosition from "./carouselPosition";
import enhance from "./enhance";
import iconContact from "./iconContact";
import iconProjects from "./iconProjects";
import showContact from "./showContact";
import showPics from "./showPics";

import { combineReducers } from "redux";

const allReducers = combineReducers({
  currentPage,
  viewVertical,
  adWord,
  carouselPosition,
  enhance,
  iconContact,
  iconProjects,
  showContact,
  showPics,
});

export default allReducers;
