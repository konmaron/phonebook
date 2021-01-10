import withAppContext from "../../context/withAppContext";
import {NavLink, withRouter} from 'react-router-dom';
import classes from './Header.module.css';
import React from 'react';

class Header extends React.Component{
    render(){
        return (
            <div className={classes.header}>
                <ul className={classes['header-nav']}>
                    <NavLink to='/list' className={classes.home} activeClassName={classes.active}>Phone Book</NavLink>
                    <NavLink to='/addContact/' className={classes.add} activeClassName={classes.active}>Add New Contact</NavLink>
                    <NavLink to='/list' className={classes['remove-all']} activeClassName={classes.active} onClick={this.props.context.removeAllContacts}>Remove All</NavLink>
                    <NavLink to='/' className={classes.logout} onClick={this.props.context.logout}>Log out</NavLink>
                </ul>
            </div>
        )
    }
}

export default withAppContext(withRouter(Header));