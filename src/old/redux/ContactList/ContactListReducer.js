import * as ContactListTypes from './ContactListTypes';

const init = {
    contacts: []
}


export default function contactListReducer(state = init, {type, payload}){
    switch (type){
        case ContactListTypes.SHOW_ALL: return {...state, contacts: payload};
        default: return state;
    }
}