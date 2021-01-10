import Api from "./api";

export default class Store{
    static getAllContacts(token){
        return Api.getAllContacts(token).then(contacts => contacts.contacts);
    }

    static addContact(token, contact){
        return Api.addContact(token, contact)
            .then(response => response.id)
    }

    static removeContact(token, id){
        return Api.removeContact(token, id)
            .then(response => response);
    }

    static removeAllContacts(token){
        return Api.removeAllContacts(token)
            .then(response => response);
    }

    static editContact(token, contact){
        return Api.editContact(token, contact)
            .then(response => response);
    }
}
