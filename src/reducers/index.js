import { combineReducers } from "redux";
import pronunciations from "./pronunciations";
import defaultpronunciations from "./defaultpronunciations"

export default combineReducers({
  pronunciations,
  defaultpronunciations
});
