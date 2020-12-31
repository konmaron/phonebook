const CONTACTS_KEY = 'CONTACTS';

export default class Store{
    static loadContacts(){
        return new Promise(((resolve, reject) => {
            setTimeout(() => {
                const string = localStorage.getItem(CONTACTS_KEY);
                resolve(JSON.parse(string))
            }, 0);
        }))
    }

    static auth(callback){
        setTimeout(() => {
            callback(true);
        }, 2000);
    }
}