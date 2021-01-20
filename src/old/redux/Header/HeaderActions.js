import * as AuthTypes from "../../../store/Auth/AuthTypes";
import swal from "sweetalert";
import Store from "../../../utils/storage";
import * as HeaderTypes from "./HeaderTypes";
import Api from "../../../utils/api";
import * as ContactListTypes from "../ContactList/ContactListTypes";

export function logout(){
    return (dispatch) => {
        dispatch({type: AuthTypes.RM_TOKEN})
        swal(`You've logged out. Will miss you :(`);
        Store.clearToken();
        dispatch({type: HeaderTypes.LOGOUT})
    }
}
