import { ActionTypes } from "../actiontypes/action-types";
import axios from "axios"
import common from "../../data/common"


export const getMembers = () => async (dispatch) => {
  const res = await axios.get(common.baseURL + "users");
  dispatch({ type: ActionTypes.GET_MEMBERS, payload: res.data });
};
