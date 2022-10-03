import { DATA_ACTION } from "../../types";

export default function dataReducer(state = [], action) {
  switch (action.type) {
    case DATA_ACTION.SET_DATA: {
      const newValue = action.payload;
      const newState = [...state, [...newValue]];

      return newState;
    }
    default:
      return state;
  }
}
