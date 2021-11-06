import { ActionTypes } from "../actiontypes/action-types";

export const loginApp = (loggedData) => {
  return {
    type: ActionTypes.LOGIN_APP,
    payload: loggedData
  }
}
