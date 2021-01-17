import * as Types from './types';

const init = {
    loading: false
}

export default function contactHandlerReducer(state = init, {type}){
    switch (type){
        case Types.ADD: return {...state, loading: false};
        case Types.RM: return {...state, loading: false};
        case Types.EDIT: return {...state, loading: false};
        case Types.AE_LOAD: return {...state, loading: true};
        case Types.AE_SLOAD: return {...state, loading: false}
        default: return state;
    }
}