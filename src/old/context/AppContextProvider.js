import {Context} from "./AppContext";
import React from 'react';
import Store from '../../utils/storage';
import {withRouter} from 'react-router-dom';
import classes from "../../components/contactForm/ContactForm.module.css";
import swal from 'sweetalert';

import Api from "../../utils/api";

class AppContextProvider extends React.Component{
    state = {
        isLoading: true,
        contacts: [],
        token: null
    }

    componentDidMount() {
        const token = Store.getToken();
        if(token){
            Api.getAllContacts(token)
                .then(response => {
                    this.setState({
                        contacts: response.data.contacts,
                        isLoading: false,
                        token
                });
            }).catch(error => {
                console.log(error)
                this.setState({
                    isLoading: false,
                    token
                })
            })
        }else{
            this.setState({isLoading:false})
        }

    }

    findById = (id) => this.state.contacts.find(contact => contact.id === id);

    // addContact = (contact) => {
    //     this.setState({isLoading: true});
    //     Api.addContact(`${this.state.token}`, contact).then(() => {
    //         Api.getAllContacts(this.state.token)
    //             .then(response => {
    //                 this.setState({
    //                     contacts: response.data.contacts,
    //                     isLoading: false,
    //                 })
    //             });
    //         swal(`Contact ${contact.name} ${contact.lastName} successfully added`)
    //         this.props.history.push('/list');
    //     }).catch((error) => {
    //         this.setState({isLoading: false});
    //     })
    // }

    // removeContact = (id) => {
    //     this.setState({isLoading: true});
    //     Api.removeContact(`${this.state.token}`, id).then(() => {
    //         const index = this.state.contacts.findIndex(contact => contact.id === id);
    //         swal(`Contact ${this.state.contacts[index].name} ${this.state.contacts[index].lastName} successfully removed`)
    //         Api.getAllContacts(this.state.token)
    //             .then(response => {
    //                 this.setState({
    //                     contacts: response.data.contacts,
    //                     isLoading: false
    //                 })
    //             });
    //         this.props.history.push('/list');
    //     }).catch((error) => {
    //         this.setState({isLoading: false});
    //     })
    // }

    // removeAllContacts = () => {
    //     swal('Your Contacts have been removed!');
    //     Api.removeAllContacts(this.state.token).then(() => {
    //         Api.getAllContacts(this.state.token)
    //             .then(response => {
    //                 this.setState({
    //                     contacts: response.data.contacts,
    //                     isLoading: false
    //                 })
    //             });
    //         this.props.history.push('/list');
    //     })
    // }

    // editContact = (contact) => {
    //     this.setState({isLoading: true});
    //     Api.editContact(`${this.state.token}`, contact).then(() => {
    //         Api.getAllContacts(this.state.token)
    //             .then(response => {
    //                 this.setState({
    //                     contacts: response.data.contacts,
    //                     isLoading: false
    //                 })
    //             });
    //         swal(`Contact ${contact.name} ${contact.lastName} successfully edited`)
    //         this.props.history.push('/list');
    //     }).catch((error) => {
    //         this.setState({isLoading: false});
    //     })
    // }

    // login = (email, password) => {
    //     Api.login(`${email}`, `${password}`)
    //         .then(response => {
    //             let token = response.data.token;
    //             localStorage.setItem(`contact_app_token`, token);
    //             this.setState({token: token})
    //             Api.getAllContacts(token)
    //                 .then(response => {
    //                     this.setState({
    //                         contacts: response.data.contacts,
    //                         isLoading: false,
    //                         token
    //                     })
    //                 });
    //             this.props.history.push('/list');
    //         })
    //         .catch(error => {
    //             swal(error.message)
    //         })
    // }

    // register = (email, password) => {
    //     Api.registration(`${email}`, `${password}`)
    //         .then(response => {
    //             let token = response.data.token;
    //             this.setState({token: token})
    //             localStorage.setItem(`contact_app_token`, token);
    //             this.props.history.push('/list');
    //         })
    //         .catch(error => {
    //             swal(error.message)
    //         })
    // }

    // logout = (event) => {
    //     event.preventDefault();
    //     swal(`You've logged out. Will miss you :(`);
    //     Store.clearToken()
    //     this.setState({token: ''});
    //     this.props.history.push('/');
    // }

    render(){
        return (
            <div className='container'>
                <Context.Provider value={{
                    findById: this.findById,
                    addContact: this.addContact,
                    editContact: this.editContact,
                    removeContact: this.removeContact,
                    login: this.login,
                    register: this.register,
                    removeAllContacts: this.removeAllContacts,
                    logout: this.logout,
                    contacts: this.state.contacts,
                    token: this.state.token
                }}>
                    {this.props.children}
                    {/*{this.state.isLoading ? <div className={classes.bgr}><div className={classes["lds-circle"]}><div></div></div></div> : null}*/}
                </Context.Provider>
            </div>
        )
    }
}

export default withRouter(AppContextProvider);
