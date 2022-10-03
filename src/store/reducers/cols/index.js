import { COLS_ACTION } from "../../types";

export default function colsReducer(state = [], action) {
  switch (action.type) {
    case COLS_ACTION.SET_COLS: {
      const set_state = [...state, ...action.payload];
      return [...set_state];
    }
    default:
      return state;
  }
}
