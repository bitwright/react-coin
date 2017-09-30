import { FETCH_GLOBAL, RECEIVE_GLOBAL, FETCH_FAILED } from "../actions/types";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_GLOBAL:
      return { ...state, loading: true };
    case RECEIVE_GLOBAL:
      return action.payload;
    case FETCH_FAILED:
      return { ...state, failed: true };
    default:
      return state;
  }
}
