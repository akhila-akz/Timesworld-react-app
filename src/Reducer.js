import { combineReducers } from "redux";

import countryReducer from "./Containers/CountryConatiner/reducer";
const rootReducer = combineReducers({ countryReducer });

export default rootReducer;
