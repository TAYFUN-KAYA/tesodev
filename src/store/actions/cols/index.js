import { COLS_ACTION } from "../../types";
import store from "../..";

const { dispatch } = store;

export const SET_COLS = (payload) => {
  dispatch({
    type: COLS_ACTION.SET_COLS,
    payload,
  });
};
