// storage
//
//
// // OLD FUNCTIONS
// // export default class Store{
// //     static getAllContacts(){
// //         // return new Promise((resolve, reject) => {
// //         //     setTimeout(() => {
// //         //         let contacts = localStorage.getItem(CONTACTS_KEY);
// //         //         if(!contacts){
// //         //             return resolve();
// //         //         }
// //         //         resolve(JSON.parse(contacts));
// //         //     }, 3000);
// //         // });
// //     }
// //
// //     static addContact(contact){
// //         return new Promise((resolve, reject) => {
// //             // setTimeout(() => {
// //             // const str = localStorage.getItem(CONTACTS_KEY);
// //             // let arr = [];
// //             // if(str){
// //             //     arr = JSON.parse(str);
// //             // }
// //             // arr.push(contact);
// //             // localStorage.setItem(CONTACTS_KEY, JSON.stringify(arr));
// //             // }, 300);
// //             Api.addContact(localStorage.getItem('TOKEN_APP'), contact)
// //                 .then(response => console.log(response))
// //             resolve();
// //         });
// //     }
// //
// //     static removeContact(id){
// //         return new Promise((resolve, reject) => {
// //             // setTimeout(() => {
// //             // const str = localStorage.getItem(CONTACTS_KEY);
// //             // let arr = [...JSON.parse(str)];
// //             // const index = arr.findIndex(contact => contact.id === id);
// //             // arr.splice(index, 1);
// //             // localStorage.setItem(CONTACTS_KEY, JSON.stringify(arr));
// //             // }, 300);
// //             Api.removeContact(localStorage.getItem('TOKEN_APP'), id)
// //                 .then(response => console.log(response));
// //             resolve();
// //         });
// //     }
//
// // static editContact(contact, id){
// //     return new Promise((resolve, reject) => {
// //         setTimeout(() => {
// //             const str = localStorage.getItem(CONTACTS_KEY);
// //             let arr = [...JSON.parse(str)];
// //             const index = arr.findIndex(contact => contact.id === id);
// //             arr[index] = contact;
// //             localStorage.setItem(CONTACTS_KEY, JSON.stringify(arr));
// //             resolve();
// //         }, 3000);
// //     });
// // }
// // // static saveContacts(){
// // //     const contacts = [
// // //         {
// // //             id:1,
// // //             name:"John",
// // //             lastName:"James",
// // //             phone:"055555555",
// // //             email:"123@123.com",
// // //             city:"YO",
// // //             desc:"hello bro boro bor"
// // //         }, {
// // //             id:2,
// // //             name:"Jack",
// // //             lastName:"Julles",
// // //             phone:"0777777777",
// // //             email:"567@123.com",
// // //             city:"New YO",
// // //             desc:"hello bro boro bor besti"
// // //         }, {
// // //             id:3,
// // //             name:"JZ",
// // //             lastName:"Wolles",
// // //             phone:"0999999999",
// // //             email:"789@123.com",
// // //             city:"Old YO",
// // //             desc:"hello bro boro bisly"
// // //         }
// // //     ];
// // //     localStorage.setItem(CONTACTS_KEY, JSON.stringify(contacts));
// // // }
//
// contactForm
// // OLD CODE
//
// // import React from 'react';
// // import classes from './ContactForm.module.css';
// //
// // export default class ContactForm extends React.Component{
// //     state = {
// //         id: '',
// //         name: '',
// //         lastName: '',
// //         phone: '',
// //         email: '',
// //         city: '',
// //         desc: ''
// //     }
// //
// //     submitHandler = event => {
// //         event.preventDefault();
// //         this.props.onSubmit({
// //             id: this.state.id,
// //             name: this.state.name,
// //             lastName: this.state.lastName,
// //             phone: this.state.phone,
// //             email: this.state.email,
// //             city: this.state.city,
// //             desc: this.state.desc
// //         })
// //         this.setState({id:'', name:'', lastName:'', phone:'', email:'', city:'', desc:''});
// //         document.getElementById('btn').setAttribute('disabled', true)
// //     }
// //
// //     onChangeHandler = event => {
// //         const name = event.target.name;
// //         const value = event.target.value;
// //         this.setState({[name]: value});
// //         if(value.length <= 1){
// //             document.querySelector(`[name=${name}]`).classList.add(classes.danger);
// //         }else{
// //             document.querySelector(`[name=${name}]`).classList.remove(classes.danger);
// //         }
// //
// //         if(!this.state.name || !this.state.lastName || !this.state.phone || !this.state.email || !this.state.city || !this.state.desc){
// //             document.getElementById('btn').setAttribute('disabled', true);
// //         }else{
// //             document.getElementById('btn').removeAttribute('disabled');
// //         }
// //     }
// //
// //     render(){
// //         return (
// //             <>
// //                 <form onSubmit={this.submitHandler}>
// //                     <input
// //                         name='name'
// //                         type='text'
// //                         placeholder='First name'
// //                         value={this.state.name}
// //                         onInput = {this.onChangeHandler}
// //                     /><br/>
// //                     <input
// //                         name='lastName'
// //                         type='text'
// //                         placeholder='Last name'
// //                         value={this.state.lastName}
// //                         onInput = {this.onChangeHandler}
// //                     /><br/>
// //                     <input
// //                         name='phone'
// //                         type='text'
// //                         placeholder='Phone number'
// //                         value={this.state.phone}
// //                         onInput = {this.onChangeHandler}
// //                     /><br/>
// //                     <input
// //                         name='email'
// //                         type='text'
// //                         placeholder='Email'
// //                         value={this.state.email}
// //                         onInput = {this.onChangeHandler}
// //                     /><br/>
// //                     <input
// //                         name='city'
// //                         type='text'
// //                         placeholder='City'
// //                         value={this.state.city}
// //                         onInput = {this.onChangeHandler}
// //                     /><br/>
// //                     <textarea
// //                         name='desc'
// //                         placeholder='Description'
// //                         value={this.state.desc}
// //                         onInput = {this.onChangeHandler}
// //                     /><br/>
// //                     <button id='btn' disabled>ADD</button>
// //                 </form>
// //             </>
// //         )
// //     }
// // }
// //
//
// appContextProvider
//
// // UPDATED FUNCTIONS
// // editContact = (id, contact) => {
// //     const index = this.state.contacts.findIndex(contact => contact.id === id);
// //     const contactsTmp = [...this.state.contacts];
// //     contactsTmp[index] = contact;
// //     this.setState({contacts: [...contactsTmp]})
// //     localStorage.setItem('CONTACTS', JSON.stringify(contactsTmp));
// //     this.setState({isLoading: false});
// // }
// // removeContact = (id) => {
// //     const index = this.state.contacts.findIndex(contact => contact.id === id);
// //     const contactsTmp = [...this.state.contacts];
// //     contactsTmp.splice(index, 1);
// //     this.setState({contacts: [...contactsTmp]});
// //     localStorage.setItem('CONTACTS', JSON.stringify(contactsTmp));
// //     this.setState({isLoading: false});
// // }
// // addContact = (contact) => {
// //     this.setState({isLoading: true});
// //     const index = this.state.contacts.length
// //     const contactsTmp = [...this.state.contacts];
// //     contactsTmp[index] = contact
// //     this.setState({contacts: [...contactsTmp]});
// //     localStorage.setItem('CONTACTS', JSON.stringify(contactsTmp));
// //     this.setState({isLoading: false});
// // }
//
// // editContact = (id, contact) => {
// //     this.setState({isLoading: true});
// //     Store.editContact(contact, id).then(() => {
// //         const arr = [...this.state.contacts];
// //         const index = this.state.contacts.findIndex(contact => contact.id === id);
// //         swal(`Contact ${this.state.contacts[index].name} ${this.state.contacts[index].lastName} successfully edited`)
// //         arr[index] = contact;
// //         this.setState({
// //             isLoading: false,
// //             contacts: [...arr]
// //         });
// //         this.props.history.push(`/list/detailed/${id}`);
// //     })
// // }

// API

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
