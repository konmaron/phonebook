import Api from "../../../utils/api";
import * as ContactListTypes from "./ContactListTypes";

export function showAll(token) {
    return (dispatch) => {
        if (token) {
            getAllContacts(token, dispatch)
        }
    }
}

function getAllContacts(token, dispatch){
    Api.getAllContacts(token)
        .then(response =>
            dispatch({
                payload: response.data.contacts,
                type: ContactListTypes.SHOW_ALL
            }))
        .catch(error => {
            console.log(error);
        })
}