import * as actionTypes from "./constants";

const intialState = {
  counrtyDataList: [],
};

const countryReducer = (state = intialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_COUNTRY_DATA_SUCCESS_ACTION:
      return {
        counrtyDataList: [...action.payload],
      };

    default:
      return {
        ...state,
      };
  }
};
export default countryReducer;
