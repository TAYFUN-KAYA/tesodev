import { SEARCH_QUERY_ACTION } from "../../types";
import store from "../../../store";

const { dispatch } = store;

export const SET_SEARCH_QUERY = (payload) => {
  dispatch({
    type: SEARCH_QUERY_ACTION.SET_SEARCH_QUERY,
    payload,
  });
};
