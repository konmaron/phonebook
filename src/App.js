import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Header from "./components/header/Header";
import ContactList from "./components/contactList/ContactList";
import AddContact from "./components/addContact/AddContact";
import DetailedContact from "./components/detailedContact/DetailedContact";


export default function App() {
  return (
    <>
      <Header/>
      <hr className='app-hr'/>
      <Switch>
          <Route path='/phonebook' exact component={ContactList}/>
          <Route path='/list' component={ContactList}/>
          <Route path='/list/detailed/:id' component={DetailedContact}/>
          <Route path='/addContact/:id/:name/:lastName/:phone/:email/:city/:desc' component={AddContact}/>
          <Route path='/addContact' component={AddContact}/>
          <Route path='**' render={() => <h1>Error</h1>}/>
      </Switch>
    </>
  );
}

