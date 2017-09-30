import axios from "axios";
import {
  FETCH_COINS,
  FETCH_GLOBAL,
  RECEIVE_COINS,
  RECEIVE_GLOBAL,
  FETCH_FAILED
} from "./types";

const baseUrl = "https://api.coinmarketcap.com/v1";

export const fetchCoins = () => async dispatch => {
  dispatch({ type: FETCH_COINS });

  let res = await axios.get(`${baseUrl}/ticker/?limit=10`);
  if (res.status === 200) {
    dispatch({ type: RECEIVE_COINS, payload: res.data });
  } else {
    dispatch({ type: FETCH_FAILED });
  }
};

export const fetchGlobal = () => async dispatch => {
  dispatch({ type: FETCH_GLOBAL });

  let res = await axios.get(`${baseUrl}/global/`);
  if (res.status === 200) {
    dispatch({ type: RECEIVE_GLOBAL, payload: res.data });
  } else {
    dispatch({ type: FETCH_FAILED });
  }
};
