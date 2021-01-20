import React from "react";

import {NavLink, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import * as ContactHandlerActions from '../../store/ContactsHandler/ContactsHandlerActions';

import DetailedContact from "../detailedContact/DetailedContact";
import AddContact from "../addContact/AddContact";

import swal from "sweetalert";
import classes from './ContactList.module.css'
import Loader from "../loader/Loader";

class ContactList extends React.Component{
    componentDidMount() {
        this.props.getAll(this.props.token)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.errorBool) {
            swal(`${this.props.errorText}`)
            return true;
        }else if(this.props.success
            && prevProps.contactsLength > this.props.contactsLength
            && this.props.contactsLength !== 0
        ){
            swal('Contact successfully removed!');
            return true;
        }else if(
            prevProps.contactsLength < this.props.contactsLength
            && this.props.contactsLength - prevProps.contactsLength === 1
        ){
            swal('Contact successfully added!');
            return true;
        }else if(prevProps.contacts.length !== this.props.contactsLength) {
            this.props.getAll(this.props.token)
        }
    }

    render() {
        return (
            <>
                <div className={classes.container}>
                {this.props.loading ? <Loader/> : null}
                <div className={classes['contact-list']}>
                    <ul>
                        {
                            this.props.contacts.map((contact, id) =>
                                <li id={id} key={id} onClick={
                                    () => {
                                        const arrLi = document.querySelectorAll('li');
                                        arrLi.forEach(li => li.classList.remove(classes.active));
                                        document.getElementById(id).classList.add(classes.active)
                                    }
                                }>
                                    <NavLink id={id} to={`/list/detailed/${contact.id}`}>
                                        <h2 className={classes['name-class-list']}>{contact.name} {contact.lastName} </h2>
                                        <p className={classes['phone-class-list']}>{contact.phone}</p>
                                        <hr className={classes['hr-class-list']}/>
                                    </NavLink>
                                </li>)
                        }
                    </ul>
                </div>
                <div className={classes['div-detailed-contact']} style={{flexBasis: '50%', marginTop: 0}}>
                    {
                        this.props.contacts.length === 0 ?
                            <div style={{marginRight: '190px'}}><AddContact/></div> :
                            <Route path='/list/detailed/:id' component={DetailedContact}/>
                    }
                </div>
            </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        contacts: state.contactHandlerReducer.contacts,
        contactsLength: state.contactHandlerReducer.contacts.length,
        token: state.authReducer.token,
        loading: state.contactHandlerReducer.loading,
        success: state.contactHandlerReducer.success,
        errorBool: !!state.contactHandlerReducer.error,
        errorText: state.contactHandlerReducer.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAll: (token) => dispatch(ContactHandlerActions.getAll(token)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);