import { combineReducers } from "redux";
import alert from "./alert";
import addCity from "./cityName";
import searchId from "./search";

export default combineReducers({
  alert,
  addCity,
  searchId,
});
