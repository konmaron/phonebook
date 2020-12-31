import React from 'react';
import classes from './ContactForm.module.css';

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

        this.setState({isLoading: true});

        setTimeout(() => {
            this.props.onSubmit({
                isLoading: false,
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
            document.getElementById('btn').setAttribute('disabled', true)
            this.setState({isLoading: false});
        }, 2000)
    }

    onChangeHandler = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]: value});
        if(value.length <= 1){
            document.querySelector(`[name=${name}]`).classList.add(classes.danger);
        }else{
            document.querySelector(`[name=${name}]`).classList.remove(classes.danger);
        }

        if(!this.state.name || !this.state.lastName || !this.state.phone || !this.state.email || !this.state.city || !this.state.desc){
            document.getElementById('btn').setAttribute('disabled', true);
        }else{
            document.getElementById('btn').removeAttribute('disabled');
        }
    }

    render(){
        return (
            <>
                {this.state.isLoading ? <div className={classes.bgr}><div className={classes["lds-circle"]}><div></div></div></div> : null}
                    <form onSubmit={this.submitHandler}>
                        <input
                            name='name'
                            type='text'
                            placeholder='First name'
                            value={this.state.name}
                            onInput = {this.onChangeHandler}
                        /><br/>
                        <input
                            name='lastName'
                            type='text'
                            placeholder='Last name'
                            value={this.state.lastName}
                            onInput = {this.onChangeHandler}
                        /><br/>
                        <input
                            name='phone'
                            type='text'
                            placeholder='Phone number'
                            value={this.state.phone}
                            onInput = {this.onChangeHandler}
                        /><br/>
                        <input
                            name='email'
                            type='text'
                            placeholder='Email'
                            value={this.state.email}
                            onInput = {this.onChangeHandler}
                        /><br/>
                        <input
                            name='city'
                            type='text'
                            placeholder='City'
                            value={this.state.city}
                            onInput = {this.onChangeHandler}
                        /><br/>
                        <textarea
                            name='desc'
                            placeholder='Description'
                            value={this.state.desc}
                            onInput = {this.onChangeHandler}
                        /><br/>
                        <button id='btn' disabled>ADD</button>
                    </form>
                </>
        )

    }
}

