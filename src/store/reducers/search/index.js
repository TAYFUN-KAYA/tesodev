import { SEARCH_QUERY_ACTION } from "../../types";

export default function seacrhReducer(state = "", action) {
  switch (action.type) {
    case SEARCH_QUERY_ACTION.SET_SEARCH_QUERY: {
      return {
        searchQuery: action.payload,
      };
    }
    default:
      return state;
  }
}
