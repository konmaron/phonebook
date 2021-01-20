import * as ContactsHandlerTypes from "./ContactsHandlerTypes";
import Api from "../../utils/api";

export function removeContact(contact, props){
    return (dispatch) => {
        dispatch({type: ContactsHandlerTypes.AE_LOAD})
        Api.removeContact(props.token, contact.id).then(() => {
            Api.getAllContacts(props.token)
                .then(response => {
                    dispatch({
                        type: ContactsHandlerTypes.RM,
                        payload: {
                            contacts: response.data.contacts,
                            success: true
                        }
                    })
                    dispatch({type: ContactsHandlerTypes.SUCCESS_ERROR_RESET})
                })
        }).catch((error) => {
            props.history.push('/list')
            dispatch({
                type: ContactsHandlerTypes.ERROR,
                payload: {error: 'Something went really wrong. Try again'}
            })
            dispatch({type: ContactsHandlerTypes.SUCCESS_ERROR_RESET})
        })
    }
}

export function removeAll(token){
    return (dispatch) => {
        Api.removeAllContacts(token)
            .then(() => {
                dispatch({type: ContactsHandlerTypes.RM_ALL})
            })
            .catch((error) => {
                dispatch({
                    type: ContactsHandlerTypes.ERROR,
                    payload: {error: 'Something went really wrong. Try again'}
                })
                dispatch({type: ContactsHandlerTypes.SUCCESS_ERROR_RESET})
            })
    }
}

export function addContact(contact, props){
    return (dispatch) => {
        dispatch({type: ContactsHandlerTypes.AE_LOAD})
        Api.addContact(props.token, contact).then(() => {
            props.history.push('/list')
            Api.getAllContacts(props.token)
                .then(response => {
                    dispatch({
                        type: ContactsHandlerTypes.ADD,
                        payload: {
                            contacts: response.data.contacts,
                            success: true
                        }
                    })
                })
        }).catch((error) => {
            props.history.push('/list')
            dispatch({
                type: ContactsHandlerTypes.ERROR,
                payload: {error: 'Cannot crete this contact: email or phone exist in the system'}
            })
            dispatch({type: ContactsHandlerTypes.SUCCESS_ERROR_RESET})
        })
    }
}

export function editContact(contact, props){
    return (dispatch) => {
        dispatch({type: ContactsHandlerTypes.AE_LOAD})
        Api.editContact(props.token, contact).then(() => {
            props.history.push('/list')
            Api.getAllContacts(props.token)
                .then(response =>
                    dispatch({
                        type: ContactsHandlerTypes.EDIT,
                        payload: {contacts: response.data.contacts}
                    }))
        }).catch((error) => {
            props.history.push('/list')
            dispatch({
                type: ContactsHandlerTypes.ERROR,
                payload: {error: 'Something went really wrong. Try again'}
            })
            dispatch({type: ContactsHandlerTypes.SUCCESS_ERROR_RESET})
        })
    }
}

export function getAll(token) {
    return (dispatch) => {
        if (token) {
            Api.getAllContacts(token)
                .then(response =>
                    dispatch({
                        type: ContactsHandlerTypes.GET_ALL,
                        payload: response.data.contacts,
                    }))
                .catch((error) => {
                    dispatch({
                        type: ContactsHandlerTypes.ERROR,
                        payload: {error: 'Something went really wrong. Try again'}
                    })
                    dispatch({type: ContactsHandlerTypes.SUCCESS_ERROR_RESET})
                })
        }
    }
}