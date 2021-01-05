const CONTACTS_KEY = 'CONTACTS';

export default class Store{
    static getAllContacts(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let contacts = localStorage.getItem(CONTACTS_KEY);
                if(!contacts){
                    return resolve();
                }
                resolve(JSON.parse(contacts));
            }, 3000);
        });
    }

    static addContact(contact){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const str = localStorage.getItem(CONTACTS_KEY);
                let arr = [];
                if(str){
                    arr = JSON.parse(str);
                }
                arr.push(contact);
                localStorage.setItem(CONTACTS_KEY, JSON.stringify(arr));
                resolve();
            }, 3000);
        });
    }

    static removeContact(id){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const str = localStorage.getItem(CONTACTS_KEY);
                let arr = [...JSON.parse(str)];
                const index = arr.findIndex(contact => contact.id === id);
                arr.splice(index, 1);
                localStorage.setItem(CONTACTS_KEY, JSON.stringify(arr));
                resolve();
            }, 3000);
        });
    }

    static editContact(contact, id){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const str = localStorage.getItem(CONTACTS_KEY);
                let arr = [...JSON.parse(str)];
                const index = arr.findIndex(contact => contact.id === id);
                arr[index] = contact;
                localStorage.setItem(CONTACTS_KEY, JSON.stringify(arr));
                resolve();
            }, 3000);
        });
    }

    static saveContacts(){
        const contacts = [
            {
                id:1,
                name:"John",
                lastName:"James",
                phone:"055555555",
                email:"123@123.com",
                city:"YO",
                desc:"hello bro boro bor"
            }, {
                id:2,
                name:"Jack",
                lastName:"Julles",
                phone:"0777777777",
                email:"567@123.com",
                city:"New YO",
                desc:"hello bro boro bor besti"
            }, {
                id:3,
                name:"JZ",
                lastName:"Wolles",
                phone:"0999999999",
                email:"789@123.com",
                city:"Old YO",
                desc:"hello bro boro bisly"
            }
        ];
        localStorage.setItem(CONTACTS_KEY, JSON.stringify(contacts));
    }
}