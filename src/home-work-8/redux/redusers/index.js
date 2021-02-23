import gistsReducer from "../redusers/gists";
import selectedGistReducer from '../redusers/selectedGist'
import { combineReducers } from "redux";

export default combineReducers({
  gists: gistsReducer,
  selectedGist : selectedGistReducer,
});
