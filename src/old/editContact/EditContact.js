import withAppContext from "../../context/withAppContext";
import classes from './EditContact.module.css'
import {withRouter} from "react-router-dom";
import ContactForm from "../../components/contactForm/ContactForm";

function EditContact({context, match}){
    const cont = match.params.id;
    {cont ? console.log('hi') : console.log('buy')}
    return (
        <div className={classes.container}>
            <div className={classes.form}>
                <ContactForm
                    onSubmit={
                    contact => context.editContact(
                        contact.id,
                        {
                            // id: parseInt(contact.id),
                            name: contact.name,
                            lastName: contact.lastName,
                            phone: contact.phone,
                            email: contact.email,
                            city: contact.city,
                            desc: contact.desc
                        })}
                    context={context}/>
            </div>
            <div className={classes.text}>
                <h1>Edit contact</h1>
            </div>
        </div>
    )
}

export default withAppContext(withRouter(EditContact));