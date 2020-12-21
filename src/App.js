import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Header from "./components/header/Header";
import ContactList from "./components/contactList/ContactList";
import AddContact from "./components/addContact/AddContact";
import EditContact from "./components/editContact/EditContact";
import DetailedContact from "./components/detailedContact/DetailedContact";


export default function App() {
  return (
    <>
      <Header/>
      <hr className='app-hr'/>
      <Switch>
          <Route path='/list' component={ContactList}/>
          <Route path='/list/detailed/:id' component={DetailedContact}/>
          <Route path='/addContact' component={AddContact}/>
          <Route path='/editContact/:id/:name/:lastName/:phone/:email/:city/:desc' component={EditContact}/>
          <Route path='**' render={() => <h1>Error</h1>}/>
      </Switch>
    </>
  );
}

