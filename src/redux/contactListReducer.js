import * as Types from './types';

const init = {
    contacts: []
}


export default function contactListReducer(state = init, {type, payload}){
    switch (type){
        case Types.SHOW_ALL: return {...state, contacts: payload};
        default: return state;
    }
}