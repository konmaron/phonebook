import React from 'react';
import classes from './EditForm.module.css';
import {withRouter} from 'react-router-dom';
import withAppContext from "../../context/withAppContext";

class EditForm extends React.Component{
    state = {
        id: parseInt(this.props.match.params.id),
        name: this.props.match.params.name,
        lastName: this.props.match.params.lastName,
        phone: this.props.match.params.phone,
        email: this.props.match.params.email,
        city: this.props.match.params.city,
        desc: this.props.match.params.desc
    }

    submitHandler = event => {
        event.preventDefault();
        this.props.onSubmit({
            id: this.state.id,
            name: this.state.name,
            lastName: this.state.lastName,
            phone: this.state.phone,
            email: this.state.email,
            city: this.state.city,
            desc: this.state.desc
        })
        this.setState({id:'', name:'', lastName:'', phone:'', email:'', city:'', desc:''});
        this.props.history.goBack();
    }

    render(){
        return (
            <div>
                <input
                    id='inpEditName'
                    type='text'
                    placeholder='Contact Name'
                    value={this.state.name}
                    onChange={event => {
                        this.setState({name: event.target.value});
                        this.state.name.length <= 1 ?
                            document.getElementById('inpEditName').classList.add(classes.danger) :
                            document.getElementById('inpEditName').classList.remove(classes.danger)
                    }}
                /><br/>
                <input
                    id='inpEditLastName'
                    type='text'
                    placeholder='Contact Last Name'
                    value={this.state.lastName}
                    onChange={event => {
                        this.setState({lastName: event.target.value});
                        this.state.lastName.length <= 1 ?
                            document.getElementById('inpEditLastName').classList.add(classes.danger) :
                            document.getElementById('inpEditLastName').classList.remove(classes.danger)
                    }}
                /><br/>
                <input
                    id='inpEditPhone'
                    type='text'
                    placeholder='Contact phone number'
                    value={this.state.phone}
                    onChange={event => {
                        this.setState({phone: event.target.value});
                        this.state.phone.length <= 1 ?
                            document.getElementById('inpEditPhone').classList.add(classes.danger) :
                            document.getElementById('inpEditPhone').classList.remove(classes.danger)
                    }}
                /><br/>
                <input
                    id='inpEditEmail'
                    type='text'
                    placeholder='Contact email'
                    value={this.state.email}
                    onChange={event => {
                        this.setState({email: event.target.value});
                        this.state.email.length <= 1 ?
                            document.getElementById('inpEditEmail').classList.add(classes.danger) :
                            document.getElementById('inpEditEmail').classList.remove(classes.danger)
                    }}
                /><br/>
                <input
                    id='inpEditCity'
                    type='text'
                    placeholder='Contact city'
                    value={this.state.city}
                    onChange={event => {
                        this.setState({city: event.target.value});
                        this.state.city.length <= 1 ?
                            document.getElementById('inpEditCity').classList.add(classes.danger) :
                            document.getElementById('inpEditCity').classList.remove(classes.danger)
                    }}
                /><br/>
                <textarea
                    placeholder='Contact Description'
                    value={this.state.desc}
                    onChange={event => this.setState({desc: event.target.value})}
                /><br/>
                <button className={classes.btn} onClick={this.submitHandler}>SAVE</button>
            </div>
        )
    }
}


export default withAppContext(withRouter(EditForm));

