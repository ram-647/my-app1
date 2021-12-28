import { combineReducers } from "redux";
import UserReducer from "./UserReducer"; //add this line

const rootReducer = combineReducers({
  task: UserReducer, //add taskreducer and name is task for future use.
});
export default rootReducer;
