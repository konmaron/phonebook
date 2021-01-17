import * as Types from './types';

import Store from "../services/storage";

const init = {
    token: Store.getToken(),
}

export default function headerReducer(state = init, {type}){
    switch(type){
        case Types.LOGOUT: return state;
        case Types.RM_ALL:return state;
        default: return state;
    }
}
