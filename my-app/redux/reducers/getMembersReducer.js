
import { ActionTypes } from "../actiontypes/action-types";

const initialState = {
  members: []
};

export const getMembersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_MEMBERS:
      return {
        ...state,
        members: action.payload
      };

    default:
      return state;
  }
};