import {combineReducers} from "redux";

import authReducer from "./Auth/AuthReducer";
import contactHandlerReducer from "./ContactsHandler/ContactHandlerReducer";

export default combineReducers({
    authReducer,
    contactHandlerReducer
})