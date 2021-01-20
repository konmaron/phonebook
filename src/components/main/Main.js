import React from 'react';

import {Route, Switch} from 'react-router-dom';

import Header from "../header/Header";
import ContactList from "../contactList/ContactList";
import AddContact from "../addContact/AddContact";
import DetailedContact from "../detailedContact/DetailedContact";

class Main extends React.Component{
    render() {
        return (
            <>
                <Header/>
                <hr className='app-hr'/>
                <Switch>
                    <Route path='/' exact component={ContactList}/>
                    <Route path='/list' component={ContactList}/>
                    <Route path='/phonebook' exact component={ContactList}/>
                    <Route path='/list/detailed/:id' component={DetailedContact}/>
                    <Route path='/addContact/:id/:name/:lastName/:phone/:email/:address/:description' component={AddContact}/>
                    <Route path='/addContact' component={AddContact}/>
                    <Route path='**' render={() => <h1>Error</h1>}/>
                </Switch>
            </>
        );
    }

}

export default Main;

