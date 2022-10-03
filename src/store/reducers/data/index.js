import { DATA_ACTION } from "../../types";

export default function dataReducer(state = [], action) {
  switch (action.type) {
    case DATA_ACTION.SET_DATA: {
      return {
        ...action.payload,
      };
    }
    default:
      return state;
  }
}
