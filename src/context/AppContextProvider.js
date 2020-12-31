import {Context} from "./AppContext";
import React from 'react';
import Store from '../storage'

export default class AppContextProvider extends React.Component{
    state = {
        isLoading: false,
        contacts: JSON.parse(localStorage.getItem('CONTACTS')) || []
    }

    findById = (id) => this.state.contacts.find(contact => contact.id === id);

    addContact = (contact) => {
        this.setState({isLoading: true});
        const index = this.state.contacts.length
        const contactsTmp = [...this.state.contacts];
        contactsTmp[index] = contact
        this.setState({contacts: [...contactsTmp]});
        localStorage.setItem('CONTACTS', JSON.stringify(contactsTmp));
        this.setState({isLoading: false});
    }

    editContact = (id, contact) => {
        const index = this.state.contacts.findIndex(contact => contact.id === id);
        const contactsTmp = [...this.state.contacts];
        contactsTmp[index] = contact;
        this.setState({contacts: [...contactsTmp]})
        localStorage.setItem('CONTACTS', JSON.stringify(contactsTmp));
        this.setState({isLoading: false});
    }

    removeContact = (id) => {
        const index = this.state.contacts.findIndex(contact => contact.id === id);
        const contactsTmp = [...this.state.contacts];
        contactsTmp.splice(index, 1);
        this.setState({contacts: [...contactsTmp]});
        localStorage.setItem('CONTACTS', JSON.stringify(contactsTmp));
        this.setState({isLoading: false});
    }

    render(){
        // this.setUp()
        return (
            <div className='container'>
                <Context.Provider value={{
                    findById: this.findById,
                    addContact: this.addContact,
                    editContact: this.editContact,
                    removeContact: this.removeContact,
                    contacts: this.state.contacts
                }}>
                    {this.props.children}
                </Context.Provider>
            </div>
        )
    }
}
