import { combineReducers } from "redux";
import home from "./Home.reducer";
import about from "./About.reducer";
import common from "./common.reducer";

export default combineReducers({
  home,
  about,
  common
});
