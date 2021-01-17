import React from 'react';

import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import * as Actions from '../../redux/actions';

import ContactForm from "../contactForm/ContactForm";
import Loader from "../loader/Loader";

import classes from './AddContact.module.css'

class AddContact extends React.Component{
    addOrEdit = this.props.match.params.id;
    render() {
        if (this.addOrEdit) {
            return (
                <div className={classes.container}>
                    {this.props.loading ? <Loader/> : null}
                    <div className={classes.form}>
                        <ContactForm
                            onSubmit={
                                contact => this.props.editContact(
                                    {
                                        id: parseInt(contact.id),
                                        name: contact.name,
                                        lastName: contact.lastName,
                                        phone: contact.phone,
                                        email: contact.email,
                                        address: contact.address,
                                        description: contact.description
                                    }, this.props)}
                            />
                    </div>
                    <div className={classes.text}>
                        <h1>Edit contact</h1>
                    </div>
                </div>
            )
        } else {
            return (
                <div className={classes.container}>
                    <div className={classes.text}>
                        <h1>Add new contact</h1>
                    </div>
                    <div className={classes.form}>
                        <ContactForm onSubmit={
                            contact => this.props.addContact(
                                {
                                    id: '',
                                    name: contact.name,
                                    lastName: contact.lastName,
                                    phone: contact.phone,
                                    email: contact.email,
                                    address: contact.address,
                                    description: contact.description
                                }, this.props)}
                        />
                    </div>
                    {this.props.loading ? <Loader/> : null}
                </div>
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        token: state.authReducer.token,
        loading: state.contactHandlerReducer.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addContact: (contact, props) => dispatch(Actions.addContact(contact, props)),
        editContact: (contact, props) => dispatch(Actions.editContact(contact, props))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AddContact));
