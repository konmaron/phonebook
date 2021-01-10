import React from 'react';
import classes from './Authorization.module.css';
import {withRouter} from 'react-router-dom'
import withAppContext from "../../context/withAppContext";

class Authorization extends React.Component{
    state = {
        email:'',
        password:''
    }

    onSubmitLogin = (event) => {
        event.preventDefault();
        this.props.context.login(this.state.email, this.state.password);
    }

    onSubmitRegistration = (event) => {
        event.preventDefault();
        this.props.context.register(this.state.email, this.state.password)
    }

    onChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]: value});
    }

    render(){
        return(
            <form className={classes.login}>
                <div className={classes['form-header']}>
                    <h1>log in</h1>
                </div>
                <div className={classes['form-input']}>
                    <input
                        name='email'
                        type="text"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.onChange}
                    />
                    <input
                        name='password'
                        type="text"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.onChange}
                    />
                </div>
                <div className={classes["form-buttons"]}>
                    <div className={classes["login-btn"]} onClick={this.onSubmitLogin}>log in</div>
                    <div className={classes["login-btn"]} onClick={this.onSubmitRegistration}>register</div>
                </div>
            </form>
        )
    }

}

export default withAppContext(withRouter(Authorization));
