import withAppContext from "../../context/withAppContext";
import ContactForm from "../contactForm/ContactForm";
import classes from './AddContact.module.css'

function AddContact({context}){
    return (
        <div className={classes.container}>
            <div className={classes.text}>
                <h1>Add new contact</h1>
            </div>
            <div className={classes.form}>
                <ContactForm onSubmit={contact => context.addContact({id: randomId(), name: contact.name,
                    lastName: contact.lastName, phone: contact.phone, email: contact.email, city: contact.city,
                    desc: contact.desc})}/>
            </div>
        </div>
    )
}

export default withAppContext(AddContact);

function randomId(){
    const min = 1;
    const max = 1000000;
    return Math.floor(min + Math.random() * (max - min));
}