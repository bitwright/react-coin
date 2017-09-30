import { FETCH_COINS, FETCH_FAILED, RECEIVE_COINS } from "../actions/types";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_COINS:
      return { ...state, loading: true };
    case RECEIVE_COINS:
      return action.payload;
    case FETCH_FAILED:
      return { ...state, failed: true };
    default:
      return state;
  }
}
