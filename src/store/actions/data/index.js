import store from "../../../store";
import { DATA_ACTION } from "../../types";

const { dispatch } = store;

export const SET_DATA = (payload) => {
  dispatch({
    type: DATA_ACTION.SET_DATA,
    payload,
  });
};
