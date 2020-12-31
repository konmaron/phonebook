import withAppContext from "../../context/withAppContext";
import classes from './EditContact.module.css'
import EditForm from "../editForm/EditForm";
import {withRouter} from "react-router-dom";

function EditContact({context}){
    return (
        <div className={classes.container}>
            <div className={classes.form}>
                <EditForm
                    onSubmit={
                    contact => context.editContact(
                        contact.id,
                        {
                            id: parseInt(contact.id),
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