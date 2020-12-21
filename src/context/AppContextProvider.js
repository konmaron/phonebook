import {Context} from "./AppContext";
import React from 'react';

export default class AppContextProvider extends React.Component{
    state = {
        contacts: [
            {id: 1, name: 'John', lastName: 'James', phone: '055555555', email: "123@123.com", city: 'YO', desc: 'hello bro boro bor'},
            {id: 2, name: 'Jack', lastName: 'Julles', phone: '0777777777', email: "567@123.com", city: 'New YO', desc: 'hello bro boro bor besti'},
            {id: 3, name: 'JZ', lastName: 'Wolles', phone: '0999999999', email: "789@123.com", city: 'Old YO', desc: 'hello bro boro bisly'},
        ]
    }

    findById = (id) => this.state.contacts.find(contact => contact.id === id);

    addContact = (contact) => {
        const index = this.state.contacts.length
        const contactsTmp = [...this.state.contacts];
        contactsTmp[index] = contact
        this.setState({contacts: [...contactsTmp]})
    }

    editContact = (id, contact) => {
        const index = this.state.contacts.findIndex(contact => contact.id === id);
        const contactsTmp = [...this.state.contacts];
        contactsTmp[index] = contact;
        this.setState({contacts: contactsTmp})
    }

    removeContact = (id) => {
        const index = this.state.contacts.findIndex(contact => contact.id === id);
        const contactsTmp = [...this.state.contacts];
        contactsTmp.splice(index, 1);
        this.setState({contacts: contactsTmp});
    }

    render(){
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
