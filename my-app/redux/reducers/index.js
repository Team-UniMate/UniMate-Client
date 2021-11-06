import { combineReducers } from "redux";
import { loginappReducer } from "./loginAppReducer"
import { getMembersReducer } from "./getMembersReducer";
export default combineReducers({
  //app
  app: loginappReducer,
  members:getMembersReducer
})

