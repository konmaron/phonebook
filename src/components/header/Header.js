import withAppContext from "../../context/withAppContext";
import {NavLink} from 'react-router-dom';
import classes from './Header.module.css'

function Header(){
    return (
        <div className={classes.header}>
            <ul className={classes['header-nav']}>
                <NavLink to='/list' className={classes.home} activeClassName={classes.active}>Phone Book</NavLink>
                <NavLink to='/addContact/' className={classes.add} activeClassName={classes.active}>Add New Contact</NavLink>
            </ul>
        </div>
    )
}

export default withAppContext(Header);