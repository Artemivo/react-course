import commentReducer from "../redusers/comment";
import { combineReducers } from "redux";

export default combineReducers({
  comment: commentReducer,
});
