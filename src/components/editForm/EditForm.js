import React from 'react';
import classes from './EditForm.module.css';
import {withRouter} from 'react-router-dom';
import withAppContext from "../../context/withAppContext";

class EditForm extends React.Component{
    state = {
        isLoading: false,
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

        this.setState({isLoading: true});
        setTimeout(() => {
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
            document.getElementById('btn-edit').setAttribute('disabled', true);
        }else{
            document.getElementById('btn-edit').removeAttribute('disabled');
        }
    }

    render(){
        return (
            <>
                {this.state.isLoading ? <div className={classes.bgr}><div className={classes["lds-circle"]}><div></div></div></div> : null}
                <div>
                    <input
                        name='name'
                        id='inpEditName'
                        type='text'
                        placeholder='Contact Name'
                        value={this.state.name}
                        onChange={this.onChangeHandler}
                    /><br/>
                    <input
                        name='lastName'
                        id='inpEditLastName'
                        type='text'
                        placeholder='Contact Last Name'
                        value={this.state.lastName}
                        onChange={this.onChangeHandler}

                    /><br/>
                    <input
                        name='phone'
                        id='inpEditPhone'
                        type='text'
                        placeholder='Contact phone number'
                        value={this.state.phone}
                        onChange={this.onChangeHandler}
                    /><br/>
                    <input
                        name='email'
                        id='inpEditEmail'
                        type='text'
                        placeholder='Contact email'
                        value={this.state.email}
                        onChange={this.onChangeHandler}
                    /><br/>
                    <input
                        name='city'
                        id='inpEditCity'
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
                    <button id='btn-edit' className={classes.btn} onClick={this.submitHandler}>SAVE</button>
                </div>
            </>
        )
    }
}


export default withAppContext(withRouter(EditForm));

