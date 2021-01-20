import * as ContactsHandlerTypes from './ContactsHandlerTypes'

const init = {
    contacts: [],
    loading: false,
    error: null,
    success: null
}

export default function contactHandlerReducer(state = init, {type, payload}){
    switch (type){
        case ContactsHandlerTypes.GET_ALL: return {...state, loading: false, contacts: payload};
        case ContactsHandlerTypes.ADD: return {...state, loading: false, contacts: payload.contacts};
        case ContactsHandlerTypes.RM: return {...state, loading: false, contacts: payload.contacts, success: payload.success};
        case ContactsHandlerTypes.RM_ALL: return {...state, contacts: []};
        case ContactsHandlerTypes.EDIT: return {...state, loading: false, contacts: payload.contacts};
        case ContactsHandlerTypes.AE_LOAD: return {...state, loading: true};
        case ContactsHandlerTypes.AE_SLOAD: return {...state, loading: false};
        case ContactsHandlerTypes.SUCCESS_ERROR_RESET: return {...state, error: null, success: null};
        case ContactsHandlerTypes.ERROR: return {...state, error: payload.error, loading: false}
        default: return state;
    }
}