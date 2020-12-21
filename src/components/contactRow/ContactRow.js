import withAppContext from "../../context/withAppContext";
import {Link, Route, withRouter} from 'react-router-dom';
import DetailedContact from "../detailedContact/DetailedContact";

function ContactRow(props){
    console.log(props.match);
    const contact = props.context.findById(parseInt(props.match.params.id))
    return (
        <div>
            <div>
                <Link to={`/list/detailed/${contact.id}`}>
                    <h1>Name: {contact.name}</h1>
                    <h2>Phone: {contact.phone}</h2>
                </Link>
            </div>
            <div>
                <Route path='/list/detailed/:id' component={DetailedContact}/>
            </div>
        </div>
    )
}

export default withAppContext(withRouter(ContactRow));