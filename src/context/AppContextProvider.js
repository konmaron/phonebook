import {Context} from "./AppContext";
import React from 'react';
import Store from '../services/storage';
import {withRouter} from 'react-router-dom';
import classes from "../components/contactForm/ContactForm.module.css";
import swal from 'sweetalert';

class AppContextProvider extends React.Component{
    state = {
        isLoading: true,
        contacts: []
    }

    componentDidMount() {
        Store.getAllContacts().then(contacts => {
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
        Store.addContact(contact).then(() => {
            const arr = [...this.state.contacts, contact];
            this.setState({
                isLoading: false,
                contacts: [...arr]
            });
            swal(`Contact ${contact.name} ${contact.lastName} successfully added`)
            this.props.history.push('/list');
        }).catch((error) => {
            this.setState({isLoading: false});
        })
    }

    removeContact = (id) => {
        this.setState({isLoading: true});
        Store.removeContact(id).then(() => {
            const arr = [...this.state.contacts];
            const index = this.state.contacts.findIndex(contact => contact.id === id);
            swal(`Contact ${this.state.contacts[index].name} ${this.state.contacts[index].lastName} successfully removed`)
            arr.splice(index,1);
            this.setState({
                isLoading: false,
                contacts: [...arr]
            });
            this.props.history.push('/list');
        }).catch((error) => {
            this.setState({isLoading: false});
        })
    }

    editContact = (id, contact) => {
        this.setState({isLoading: true});
        Store.editContact(contact, id).then(() => {
            const arr = [...this.state.contacts];
            const index = this.state.contacts.findIndex(contact => contact.id === id);
            swal(`Contact ${this.state.contacts[index].name} ${this.state.contacts[index].lastName} successfully edited`)
            arr[index] = contact;
            this.setState({
                isLoading: false,
                contacts: [...arr]
            });
            this.props.history.push(`/list/detailed/${id}`);
        })
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
                    {this.state.isLoading ? <div className={classes.bgr}><div className={classes["lds-circle"]}><div></div></div></div> : null}                </Context.Provider>
            </div>
        )
    }
}

export default withRouter(AppContextProvider);

// UPDATED FUNCTIONS
// editContact = (id, contact) => {
//     const index = this.state.contacts.findIndex(contact => contact.id === id);
//     const contactsTmp = [...this.state.contacts];
//     contactsTmp[index] = contact;
//     this.setState({contacts: [...contactsTmp]})
//     localStorage.setItem('CONTACTS', JSON.stringify(contactsTmp));
//     this.setState({isLoading: false});
// }
// removeContact = (id) => {
//     const index = this.state.contacts.findIndex(contact => contact.id === id);
//     const contactsTmp = [...this.state.contacts];
//     contactsTmp.splice(index, 1);
//     this.setState({contacts: [...contactsTmp]});
//     localStorage.setItem('CONTACTS', JSON.stringify(contactsTmp));
//     this.setState({isLoading: false});
// }
// addContact = (contact) => {
//     this.setState({isLoading: true});
//     const index = this.state.contacts.length
//     const contactsTmp = [...this.state.contacts];
//     contactsTmp[index] = contact
//     this.setState({contacts: [...contactsTmp]});
//     localStorage.setItem('CONTACTS', JSON.stringify(contactsTmp));
//     this.setState({isLoading: false});
// }