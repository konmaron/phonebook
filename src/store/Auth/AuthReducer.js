import * as AuthTypes from './AuthTypes';

import Store from "../../utils/storage";

const init = {
    token: Store.getToken() || '',
    error: null
}

export default function authReducer(state = init, {type, payload}){
    switch(type){
        case AuthTypes.LOGIN:
            Store.saveToken(payload.token)
            return {...state, token: payload.token};
        case AuthTypes.LOGOUT:
            Store.clearToken()
            return {...state, token: null};
        case AuthTypes.REG:
            Store.saveToken(payload.token);
            return {...state, token: payload.token};
        case AuthTypes.AUTH_ERROR:
            return {...state, error: payload.error};
        case AuthTypes.AUTH_ERROR_CLEAN:
            return {...state, error: null}
        default: return state;
    }
}