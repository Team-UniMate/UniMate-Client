import { ActionTypes } from "../actiontypes/action-types";

const initialState = {
  applogin:[]
}
export const loginappReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN_APP:
      return { ...state, applogin: action.payload }
    default: 
      return state;
    
  }
}