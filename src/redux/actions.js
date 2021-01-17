import * as Types from './types';
import Api from "../services/api";
import swal from "sweetalert";
import Store from "../services/storage";

export function logout(){
    return (dispatch) => {
        dispatch({type: Types.RM_TOKEN})
        swal(`You've logged out. Will miss you :(`);
        Store.clearToken();
        dispatch({type: Types.LOGOUT})
    }
}

export function removeAll(token){
    return (dispatch) => {
        swal('Your Contacts have been removed!');
        Api.removeAllContacts(token).then(() => {
            dispatch({type: Types.RM_ALL})
            getAllContacts(token, dispatch)
        })
    }
}

export function login(email, password, props){
    return (dispatch) => {
        Api.login(email, password)
            .then(response => {
                dispatch({
                    type: Types.LOGIN,
                    payload: {
                        token: response.data.token,
                        email,
                        password,
                    }
                })
                let token = response.data.token;
                localStorage.setItem(`contact_app_token`, token);
                props.history.push('/list')
            })
            .catch(error => {
                swal(error.message)
            })
    }
}

export function registration(email, password, props){
    return (dispatch) => {
        Api.registration(email, password)
            .then(response => {
                dispatch({
                    type: Types.REG,
                    payload: {
                        token: response.data.token,
                        email,
                        password,
                    }
                })
                let token = response.data.token;
                localStorage.setItem(`contact_app_token`, token);
                props.history.push('/list')
            })
            .catch(error => {
                swal(error.message)
            })
    }
}

export function removeContact(contact, props){
    return (dispatch) => {
        dispatch({type: Types.AE_LOAD})
        Api.removeContact(props.token, contact.id).then(() => {
            swal(`Contact ${contact.name} ${contact.lastName} successfully removed`)
            dispatch({type: Types.RM})
            getAllContacts(props.token, dispatch)
        }).catch((error) => {
            console.error(error);
        })
    }
}

export function addContact(contact, props){
    return (dispatch) => {
        dispatch({type: Types.AE_LOAD})
        Api.addContact(props.token, contact).then(() => {
            swal(`Contact ${contact.name} ${contact.lastName} successfully added`)
            props.history.push('/list')
            dispatch({type: Types.ADD})
            getAllContacts(props.token, dispatch)
        }).catch((error) => {
            dispatch({type: Types.AE_SLOAD})
            console.error(error)
        })
    }
}

export function editContact(contact, props){
    return (dispatch) => {
        dispatch({type: Types.AE_LOAD})
        Api.editContact(props.token, contact).then(() => {
            swal(`Contact ${contact.name} ${contact.lastName} successfully edited`);
            props.history.push('/list')
            dispatch({type: Types.EDIT});
            getAllContacts(props.token, dispatch)
        }).catch((error) => {
            dispatch({type: Types.AE_SLOAD})
            console.error(error);
        })
    }
}

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
                type: Types.SHOW_ALL
            }))
        .catch(error => {
            console.log(error);
        })
}