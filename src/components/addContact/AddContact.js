import withAppContext from "../../context/withAppContext";
import {withRouter} from 'react-router-dom';
import ContactForm from "../contactForm/ContactForm";
import classes from './AddContact.module.css'

function AddContact({context, match}){
    const addOrEdit = match.params.id;
    if(addOrEdit){
        return (
            <div className={classes.container}>
                <div className={classes.form}>
                    <ContactForm
                        onSubmit={
                            contact => context.editContact(
                                {
                                    id: parseInt(contact.id),
                                    name: contact.name,
                                    lastName: contact.lastName,
                                    phone: contact.phone,
                                    email: contact.email,
                                    address: contact.address,
                                    description: contact.description
                                })}
                        context={context}/>
                </div>
                <div className={classes.text}>
                    <h1>Edit contact</h1>
                </div>
            </div>
        )
    }else{
        return (
            <div className={classes.container}>
                <div className={classes.text}>
                    <h1>Add new contact</h1>
                </div>
                <div className={classes.form}>
                    <ContactForm onSubmit={
                        contact => context.addContact(
                            {
                                id: '',
                                name: contact.name,
                                lastName: contact.lastName,
                                phone: contact.phone,
                                email: contact.email,
                                address: contact.address,
                                description: contact.description
                            })
                    }/>
                </div>
            </div>
        )
    }
}

export default withAppContext(withRouter(AddContact));
