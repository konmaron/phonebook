import * as HedaerTypes from './HeaderTypes';

import Store from "../../../utils/storage";

const init = {
    token: Store.getToken()
}

export default function headerReducer(state = init, {type}){
    switch(type){
        case HedaerTypes.LOGOUT: return state;
        case HedaerTypes.RM_ALL:return state;
        default: return state;
    }
}
