import {NavLink, Route} from 'react-router-dom';
import React from "react";
import withAppContext from "../../context/withAppContext";
import DetailedContact from "../detailedContact/DetailedContact";
import AddContact from "../addContact/AddContact";
import classes from './ContactList.module.css'

function ContactList({context}){
    console.log(context)
    return (
        <div className={classes.container}>
            <div className={classes['contact-list']}>
                <ul>
                    {
                        context.contacts.map((contact, id) =>
                            <li id={id} key={id} onClick={
                                () => {
                                   const arrLi = document.querySelectorAll('li');
                                   arrLi.forEach(li => li.classList.remove(classes.active));
                                   document.getElementById(id).classList.add(classes.active)}
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
                context.contacts.length === 0 ?
                    <div style={{marginRight: '190px'}}><AddContact/></div> :
                    <Route path='/list/detailed/:id' component={DetailedContact}/>
            }
            </div>
        </div>
    )
}

export default withAppContext(ContactList);