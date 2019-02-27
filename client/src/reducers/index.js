import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import profileReducer from "./profileReducer";
import essentialReducer from "./essentialReducer";
import projectReducer from "./projectReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  profile: profileReducer,
  essential: essentialReducer,
  project: projectReducer
});
