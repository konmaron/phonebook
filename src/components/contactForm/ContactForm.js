import React from 'react';
import classes from './ContactForm.module.css'

export default class ContactForm extends React.Component{
    state = {
        id: '',
        name: '',
        lastName: '',
        phone: '',
        email: '',
        city: '',
        desc: ''
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
        alert(`Contact ${this.state.name} ${this.state.lastName} successfully added`)
        this.setState({id:'', name:'', lastName:'', phone:'', email:'', city:'', desc:''});
    }

    render(){
        return (
            <div>
                <input
                    id='inpAddName'
                    type='text'
                    placeholder='Contact Name'
                    value={this.state.name}
                    onChange={event => {
                        this.setState({name: event.target.value});
                        this.state.name.length <= 1 ?
                            document.getElementById('inpAddName').classList.add(classes.danger) :
                            document.getElementById('inpAddName').classList.remove(classes.danger)
                    }}
                /><br/>
                <input
                    id='inpAddLastName'
                    type='text'
                    placeholder='Contact Last Name'
                    value={this.state.lastName}
                    onChange={event => {
                        this.setState({lastName: event.target.value});
                        this.state.lastName.length <= 1 ?
                            document.getElementById('inpAddLastName').classList.add(classes.danger) :
                            document.getElementById('inpAddLastName').classList.remove(classes.danger)
                    }}
                /><br/>
                <input
                    id='inpAddPhone'
                    type='text'
                    placeholder='Contact phone number'
                    value={this.state.phone}
                    onChange={event => {
                        this.setState({phone: event.target.value});
                        this.state.phone.length <= 1 ?
                            document.getElementById('inpAddPhone').classList.add(classes.danger) :
                            document.getElementById('inpAddPhone').classList.remove(classes.danger)
                    }}
                /><br/>
                <input
                    id='inpAddEmail'
                    type='text'
                    placeholder='Contact email'
                    value={this.state.email}
                    onChange={event => {
                        this.setState({email: event.target.value});
                        this.state.email.length <= 1 ?
                            document.getElementById('inpAddEmail').classList.add(classes.danger) :
                            document.getElementById('inpAddEmail').classList.remove(classes.danger)
                    }}
                /><br/>
                <input
                    id='inpAddCity'
                    type='text'
                    placeholder='Contact city'
                    value={this.state.city}
                    onChange={event => {
                        this.setState({city: event.target.value});
                        this.state.city.length <= 1 ?
                            // ((document.getElementById('btn').setAttribute('disabled', true)),
                            document.getElementById('inpAddCity').classList.add(classes.danger) :
                            document.getElementById('inpAddCity').classList.remove(classes.danger)
                    }}
                /><br/>
                <textarea
                    placeholder='Contact Description'
                    value={this.state.desc}
                    onChange={event => this.setState({desc: event.target.value})}
                /><br/>
                <button id='btn' onClick={this.submitHandler}>ADD</button>
            </div>
        )
    }
}