import * as actionTypes from "./constants";
import axios from "axios";

const fetchCountryData = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: actionTypes.FETCH_COUNTRY_DATA_INIT_ACTION });
      const res = await axios.get(
        "https://restcountries.com/v2/all?fields=name,region,flag "
      );

      if (res.status === 200) {
        dispatch({
          type: actionTypes.FETCH_COUNTRY_DATA_SUCCESS_ACTION,
          payload: res.data,
        });
      } else {
        dispatch({
          type: actionTypes.FETCH_COUNTRY_DATA_FAIL_ACTION,
          payload: res.error,
        });
      }
    } catch (e) {}
  };
};

export default {
  fetchCountryData,
};
