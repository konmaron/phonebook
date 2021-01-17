import React from 'react';

import {NavLink, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import * as Actions from '../../redux/actions';

import classes from './Header.module.css';

class Header extends React.Component{
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
        token: state.authReducer.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(Actions.logout()),
        removeAll: (token) => dispatch(Actions.removeAll(token))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));