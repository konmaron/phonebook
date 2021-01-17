import * as Types from './types';

import Store from "../services/storage";

const init = {
    token: Store.getToken() || ''
}

export default function authReducer(state = init, {type, payload}){
    switch(type){
        case Types.LOGIN: return {...state, token: payload.token};
        case Types.REG: return {...state, token: payload.token};
        case Types.RM_TOKEN: return {...state, token: ''}
        default: return state;
    }
}