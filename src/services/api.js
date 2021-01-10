const BASE_URL = 'http://contacts-telran.herokuapp.com';

export default class Api{
    static registration(email, password){
        let auth = {email, password};
        let requestBody = JSON.stringify(auth);

        return request(`${BASE_URL}/api/registration`, {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
            },
            body:requestBody
        })
    }

    static login(email, password){
        let auth = {email, password};
        let requestBody = JSON.stringify(auth);

        return request(`${BASE_URL}/api/login`, {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
            },
            body:requestBody
        })
    }

    static getAllContacts(token){
        return request(`${BASE_URL}/api/contact`, {
            headers: {
                Authorization: token
            }
        })
    }

    static addContact(token, contact) {
        let requestBody = JSON.stringify(contact);
        return request(`${BASE_URL}/api/contact`, {
            method: 'POST',
            headers: {
                Authorization: `${token}`,
                'Content-Type':'application/json'
            },
            body: requestBody
        })
    }

    static removeContact(token, id){
        return request(`${BASE_URL}/api/contact/${id}`,{
            method: 'DELETE',
            headers: {
                Authorization: `${token}`
            }
        })
    }

    static removeAllContacts(token){
        return request(`${BASE_URL}/api/clear`, {
            method: 'DELETE',
            headers: {
                Authorization: token
            }
        })
    }

    static editContact(token, contact){
        let requestBody = JSON.stringify(contact);
        return request(`${BASE_URL}/api/contact`, {
            method: 'PUT',
            headers: {
                Authorization: `${token}`,
                'Content-Type':'application/json'
            },
            body: requestBody
        })
    }
}

function parseJSON(response) {
    return new Promise(resolve => {
        response.json()
            .then(json => resolve({
                status: response.status,
                ok: response.ok,
                json
            }));
    });
}

function request(url, options) {
    return new Promise((resolve, reject) => {
        fetch(url, options)
            .then(parseJSON)
            .then(response => {
                if (response.ok) {
                    return resolve(response.json);
                }
                return reject(response.json);
            }).catch(error => {
            reject({
                message: error.message
            });
        });
    });
}