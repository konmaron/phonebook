import axios from "axios";

const client = axios.create({
    baseURL:'https://contacts-telran.herokuapp.com/api/'
})

client.interceptors.request.use(
    function (config){
        config.headers = {
            Authorization: localStorage.getItem('contact_app_token'),
            'Content-Type':'application/json',
        }
        return config;
    }, function (error) {
        return Promise.reject(error);
    }
)

export default class Api{
    static registration(email, password){
        return client.post('registration', {
            email: email,
            password: password
        })
    }

    static login(email, password){
        return client.post('login', {
            email: email,
            password: password
        })
    }

    static getAllContacts(token){
        return client.get('contact');
    }

    static addContact(token, contact) {
        return client.post('contact', {
            address: contact.address,
            description: contact.description,
            email: contact.email,
            lastName: contact.lastName,
            name: contact.name,
            phone: contact.phone
        })
    }

    static removeContact(token, id){
        return client.delete(`contact/${id}`, {
            headers: {
                Authorization: token
            }
        })
    }

    static removeAllContacts(token){
        return client.delete(`clear`, {
            headers: {
                Authorization: token
            }
        })
    }

    static editContact(token, contact){
        return client.put('contact', {
            address: contact.address,
            description: contact.description,
            email: contact.email,
            lastName: contact.lastName,
            name: contact.name,
            phone: contact.phone,
            id: contact.id
        })
    }
}

// function parseJSON(response) {
//     return new Promise(resolve => {
//         response.json()
//             .then(json => resolve({
//                 status: response.status,
//                 ok: response.ok,
//                 json
//             }));
//     });
// }
//
// function request(url, options) {
//     return new Promise((resolve, reject) => {
//         fetch(url, options)
//             .then(parseJSON)
//             .then(response => {
//                 if (response.ok) {
//                     return resolve(response.json);
//                 }
//                 return reject(response.json);
//             }).catch(error => {
//             reject({
//                 message: error.message
//             });
//         });
//     });
// }