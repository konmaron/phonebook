import {combineReducers} from "redux";

import headerReducer from "./headerReducer";
import authReducer from "./authReducer";
import contactHandlerReducer from "./contactHandlerReducer";
import contactListReducer from "./contactListReducer";

export default combineReducers({
    headerReducer,
    authReducer,
    contactHandlerReducer,
    contactListReducer
})