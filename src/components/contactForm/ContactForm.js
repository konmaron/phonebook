import React from 'react';
import classes from './ContactForm.module.css';
import {withRouter} from 'react-router-dom';
import withAppContext from "../../context/withAppContext";

class ContactForm extends React.Component{
    state = {
        id: parseInt(this.props.match.params.id) || '',
        name: this.props.match.params.name || '',
        lastName: this.props.match.params.lastName || '',
        phone: this.props.match.params.phone || '',
        email: this.props.match.params.email || '',
        city: this.props.match.params.city || '',
        desc: this.props.match.params.desc || ''
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
        document.getElementById('btn').setAttribute('disabled', true)
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
                <form onSubmit={this.submitHandler}>
                    <input
                        name='name'
                        type='text'
                        placeholder='Contact Name'
                        value={this.state.name}
                        onChange={this.onChangeHandler}
                    /><br/>
                    <input
                        name='lastName'
                        type='text'
                        placeholder='Contact Last Name'
                        value={this.state.lastName}
                        onChange={this.onChangeHandler}

                    /><br/>
                    <input
                        name='phone'
                        type='text'
                        placeholder='Contact phone number'
                        value={this.state.phone}
                        onChange={this.onChangeHandler}
                    /><br/>
                    <input
                        name='email'
                        type='text'
                        placeholder='Contact email'
                        value={this.state.email}
                        onChange={this.onChangeHandler}
                    /><br/>
                    <input
                        name='city'
                        type='text'
                        placeholder='Contact city'
                        value={this.state.city}
                        onChange={this.onChangeHandler}
                    /><br/>
                    <textarea
                        name='desc'
                        placeholder='Contact Description'
                        value={this.state.desc}
                        onChange={this.onChangeHandler}
                    /><br/>
                    {this.state.id ?
                        <button id='btn' className={classes.btn} disabled>SAVE</button> :
                        <button id='btn' className={classes.btn} disabled>ADD</button>
                    }
                </form>
            </>
        )
    }
}


export default withAppContext(withRouter(ContactForm));


// OLD CODE

// import React from 'react';
// import classes from './ContactForm.module.css';
//
// export default class ContactForm extends React.Component{
//     state = {
//         id: '',
//         name: '',
//         lastName: '',
//         phone: '',
//         email: '',
//         city: '',
//         desc: ''
//     }
//
//     submitHandler = event => {
//         event.preventDefault();
//         this.props.onSubmit({
//             id: this.state.id,
//             name: this.state.name,
//             lastName: this.state.lastName,
//             phone: this.state.phone,
//             email: this.state.email,
//             city: this.state.city,
//             desc: this.state.desc
//         })
//         this.setState({id:'', name:'', lastName:'', phone:'', email:'', city:'', desc:''});
//         document.getElementById('btn').setAttribute('disabled', true)
//     }
//
//     onChangeHandler = event => {
//         const name = event.target.name;
//         const value = event.target.value;
//         this.setState({[name]: value});
//         if(value.length <= 1){
//             document.querySelector(`[name=${name}]`).classList.add(classes.danger);
//         }else{
//             document.querySelector(`[name=${name}]`).classList.remove(classes.danger);
//         }
//
//         if(!this.state.name || !this.state.lastName || !this.state.phone || !this.state.email || !this.state.city || !this.state.desc){
//             document.getElementById('btn').setAttribute('disabled', true);
//         }else{
//             document.getElementById('btn').removeAttribute('disabled');
//         }
//     }
//
//     render(){
//         return (
//             <>
//                 <form onSubmit={this.submitHandler}>
//                     <input
//                         name='name'
//                         type='text'
//                         placeholder='First name'
//                         value={this.state.name}
//                         onInput = {this.onChangeHandler}
//                     /><br/>
//                     <input
//                         name='lastName'
//                         type='text'
//                         placeholder='Last name'
//                         value={this.state.lastName}
//                         onInput = {this.onChangeHandler}
//                     /><br/>
//                     <input
//                         name='phone'
//                         type='text'
//                         placeholder='Phone number'
//                         value={this.state.phone}
//                         onInput = {this.onChangeHandler}
//                     /><br/>
//                     <input
//                         name='email'
//                         type='text'
//                         placeholder='Email'
//                         value={this.state.email}
//                         onInput = {this.onChangeHandler}
//                     /><br/>
//                     <input
//                         name='city'
//                         type='text'
//                         placeholder='City'
//                         value={this.state.city}
//                         onInput = {this.onChangeHandler}
//                     /><br/>
//                     <textarea
//                         name='desc'
//                         placeholder='Description'
//                         value={this.state.desc}
//                         onInput = {this.onChangeHandler}
//                     /><br/>
//                     <button id='btn' disabled>ADD</button>
//                 </form>
//             </>
//         )
//     }
// }
//
