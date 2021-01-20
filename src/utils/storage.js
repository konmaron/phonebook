const TOKEN_KEY = 'contact_app_token'

export default class Store{
    static saveToken(token){
        localStorage.setItem(TOKEN_KEY, token);
    }

    static getToken(){
        return localStorage.getItem(TOKEN_KEY);
    }

    static clearToken(){
        localStorage.removeItem(TOKEN_KEY);
    }
}
