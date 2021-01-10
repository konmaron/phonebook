import {Context} from "./AppContext";
import React from 'react';
import Store from '../services/storage';
import {withRouter} from 'react-router-dom';
import classes from "../components/contactForm/ContactForm.module.css";
import swal from 'sweetalert';

import Api from "../services/api";

class AppContextProvider extends React.Component{
    state = {
        isLoading: true,
        contacts: [],
        token: ''
    }

    componentDidMount() {
        Store.getAllContacts(`${this.state.token}`).then(contacts => {
            this.setState({
                contacts,
                isLoading: false
            });
        }).catch(error => {
            this.setState({isLoading: false})
        })
    }

    findById = (id) => this.state.contacts.find(contact => contact.id === id);

    addContact = (contact) => {
        this.setState({isLoading: true});
        Store.addContact(`${this.state.token}`, contact).then(() => {
            Store.getAllContacts(`${this.state.token}`).then(contacts => {
                this.setState({
                    contacts,
                    isLoading: false
                });
            })
            swal(`Contact ${contact.name} ${contact.lastName} successfully added`)
            this.props.history.push('/list');
        }).catch((error) => {
            this.setState({isLoading: false});
        })
    }

    removeContact = (id) => {
        this.setState({isLoading: true});
        Store.removeContact(`${this.state.token}`, id).then(() => {
            const index = this.state.contacts.findIndex(contact => contact.id === id);
            swal(`Contact ${this.state.contacts[index].name} ${this.state.contacts[index].lastName} successfully removed`)
            Store.getAllContacts(`${this.state.token}`).then(contacts => {
                this.setState({
                    contacts,
                    isLoading: false
                });
            })
            this.props.history.push('/list');
        }).catch((error) => {
            this.setState({isLoading: false});
        })
    }

    removeAllContacts = () => {
        swal('Your Contacts have been removed!');
        Store.removeAllContacts(this.state.token).then(() => {
            Store.getAllContacts(`${this.state.token}`).then(contacts => {
                this.setState({
                    contacts,
                    isLoading: false
                });
            })
            this.props.history.push('/list');
        })
    }

    editContact = (contact) => {
        this.setState({isLoading: true});
        Store.editContact(`${this.state.token}`, contact).then(() => {
            Store.getAllContacts(`${this.state.token}`).then(contacts => {
                this.setState({
                    contacts,
                    isLoading: false
                });
            })
            swal(`Contact ${contact.name} ${contact.lastName} successfully edited`)
            this.props.history.push('/list');
        }).catch((error) => {
            this.setState({isLoading: false});
        })
    }

    login = (email, password) => {
        Api.login(`${email}`, `${password}`)
            .then(response => {
                let token = response.token;
                localStorage.setItem(`TOKEN_OF_${email}`, token);
                this.setState({token: token})
                Store.getAllContacts(`${this.state.token}`).then(contacts => {
                    this.setState({
                        contacts,
                        isLoading: false
                    });
                })
                this.props.history.push('/list');
            })
            .catch(error => {
                swal(error.message)
            })
    }

    register = (email, password) => {
        Api.registration(`${email}`, `${password}`)
            .then(response => {
                let token = response.token;
                console.log(token);
                this.setState({token: token})
                localStorage.setItem(`TOKEN_OF_${email}`, token);
                this.props.history.push('/list');
            })
            .catch(error => {
                swal(error.message)
            })
    }

    logout = (event) => {
        event.preventDefault();
        swal(`You've logged out. Will miss you :(`);
        this.setState({token: ''});
        this.props.history.push('/');
    }

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
                    {this.state.isLoading ? <div className={classes.bgr}><div className={classes["lds-circle"]}><div></div></div></div> : null}                </Context.Provider>
            </div>
        )
    }
}

export default withRouter(AppContextProvider);
