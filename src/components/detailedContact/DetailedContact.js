import withAppContext from "../../context/withAppContext";
import classes from './DetailedContact.module.css';
import {Link} from 'react-router-dom'

import edit from "./img/edit.png";
import phone from "./img/technology.png"
import mail from "./img/multimedia.png"
import city from "./img/buildings.png"
import bin from './img/bin.svg';

function DetailedContact({match, context}){
    const contact = context.findById(parseInt(match.params.id))
    return (
        <div id={match.params.id}>
            <div className={classes.name}>
                <h2>{contact.name} {contact.lastName}</h2>
                <div className={classes['name-img']}>
                    <Link to='/list'><img src={bin} alt='bin icon' onClick={() => context.removeContact(contact.id)}/></Link>
                    <Link to={`/editContact/${contact.id}/${contact.name}/${contact.lastName}/${contact.phone}/${contact.email}/${contact.city}/${contact.desc}`}><img src={edit} alt='edit icon'/></Link>
                </div>
            </div>
            <hr className={classes['hr-detailed']}/>
            <div className={classes.data}>
                <img src={phone} alt='phone icon'/>
                <p>{contact.phone}</p>
            </div>
            <div className={classes.data}>
                <img src={mail} alt='email icon'/>
                <p>{contact.email}</p>
            </div>
            <div className={classes.data}>
                <img src={city} alt='buildings icon'/>
                <p>{contact.city}</p><br/>
            </div>
            <div className={classes.data}>
                <p>{contact.desc}</p>
            </div>
        </div>
    )
}

export default withAppContext(DetailedContact)