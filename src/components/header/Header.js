import React from 'react';

import {NavLink, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import * as ContactsHandlerActions from '../../store/ContactsHandler/ContactsHandlerActions';
import * as AuthActions from '../../store/Auth/AuthActions'

import swal from "sweetalert";
import classes from './Header.module.css';

class Header extends React.Component{
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.contactsLength === 0
            && this.props.contactsLength !== prevProps.contactsLength
            && prevProps.contactsLength !== 0){
            swal('All contacts have been removed!');
            return true;
        }
    }

    render(){
        return (
            <div className={classes.header}>
                <ul className={classes['header-nav']}>
                    <NavLink to='/list' className={classes.home} activeClassName={classes.active}>Phone Book</NavLink>
                    <NavLink to='/addContact/' className={classes.add} activeClassName={classes.active}>Add New Contact</NavLink>
                    <NavLink to='/list' className={classes['remove-all']} activeClassName={classes.active} onClick={() => this.props.removeAll(this.props.token)}>Remove All</NavLink>
                    <NavLink to='/' className={classes.logout} onClick={this.props.logout}>Log out</NavLink>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        token: state.authReducer.token,
        contactsLength: state.contactHandlerReducer.contacts.length
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(AuthActions.logout()),
        removeAll: (token) => dispatch(ContactsHandlerActions.removeAll(token))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));