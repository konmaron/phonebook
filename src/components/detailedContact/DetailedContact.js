import React from 'react'

import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import * as ContactsHandlerActions from '../../store/ContactsHandler/ContactsHandlerActions';

import classes from './DetailedContact.module.css';

import edit from "./img/edit.png";
import phone from "./img/technology.png"
import mail from "./img/multimedia.png"
import city from "./img/buildings.png"
import bin from './img/bin.svg';

class DetailedContact extends React.Component{
    findById = (id) => this.props.contacts.find(contact => contact.id === id);

    render() {
        const cntc = this.findById(parseInt(this.props.match.params.id))
        return (
            <div id={this.props.match.params.id}>
                <div className={classes.name}>
                    <h2>{cntc.name} {cntc.lastName}</h2>
                    <div className={classes['name-img']}>
                        <Link to='/list'><img src={bin} alt='bin icon' onClick={() => this.props.removeContact(cntc, this.props)}/></Link>
                        <Link
                            to={`/addContact/${cntc.id}/${cntc.name}/${cntc.lastName}/${cntc.phone}/${cntc.email}/${cntc.address}/${cntc.description}`}>
                            <img src={edit} alt='edit icon'/>
                        </Link>
                    </div>
                </div>
                <hr className={classes['hr-detailed']}/>
                <div className={classes.data}>
                    <img src={phone} alt='phone icon'/>
                    <p>{cntc.phone}</p>
                </div>
                <div className={classes.data}>
                    <img src={mail} alt='email icon'/>
                    <p>{cntc.email}</p>
                </div>
                <div className={classes.data}>
                    <img src={city} alt='buildings icon'/>
                    <p>{cntc.address}</p><br/>
                </div>
                <div className={classes.data}>
                    <p>{cntc.description}</p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        token: state.authReducer.token,
        contacts: state.contactHandlerReducer.contacts,
        loading: state.contactHandlerReducer.loading,
        success: state.contactHandlerReducer.success
    }
}

const mapDispatchToProps = dispatch => {
    return {
        removeContact: (contact, props) => dispatch(ContactsHandlerActions.removeContact(contact, props))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailedContact)