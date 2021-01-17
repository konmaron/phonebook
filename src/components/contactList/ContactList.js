import React from "react";

import {NavLink, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import * as Actions from '../../redux/actions';

import DetailedContact from "../detailedContact/DetailedContact";
import AddContact from "../addContact/AddContact";

import classes from './ContactList.module.css'
import Loader from "../loader/Loader";

class ContactList extends React.Component{
    componentDidMount() {
        this.props.showAll(this.props.token)
    }

    render() {
        return (
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
        )
    }
}

const mapStateToProps = state => {
    return {
        contacts: state.contactListReducer.contacts,
        token: state.authReducer.token,
        loading: state.contactHandlerReducer.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        showAll: (token) => dispatch(Actions.showAll(token))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);