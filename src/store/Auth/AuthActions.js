import * as AuthTypes from './AuthTypes';
import Api from "../../utils/api";

export function login(email, password, props){
    return (dispatch) => {
        Api.login(email, password)
            .then(response => {
                dispatch({
                    type: AuthTypes.LOGIN,
                    payload: {token: response.data.token}
                })
            })
            .catch(error => {
                dispatch({
                    type: AuthTypes.AUTH_ERROR,
                    payload: {
                        error: error.response.data.message
                    }
                })
                dispatch({type: AuthTypes.AUTH_ERROR_CLEAN})
            })
    }
}

export function registration(email, password, props){
    return (dispatch) => {
        Api.registration(email, password)
            .then(response => {
                dispatch({
                    type: AuthTypes.REG,
                    payload: {token: response.data.token}
                })
            })
            .catch(error => {
                dispatch({
                    type: AuthTypes.AUTH_ERROR,
                    payload: {
                        error: error.response.data.message
                    }
                })
                dispatch({type: AuthTypes.AUTH_ERROR_CLEAN})
            })
    }
}

export function logout(){
    return (dispatch) => {
        dispatch({type: AuthTypes.LOGOUT})
    }
}