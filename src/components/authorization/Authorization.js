import React from 'react';
import classes from './Authorization.module.css';
import {withRouter} from 'react-router-dom'
import withAppContext from "../../context/withAppContext";
import view from './img/view.png';
import noview from './img/invisible.png';

class Authorization extends React.Component{
    state = {
        email:'',
        password:'',
        hidden: true,
        hiddenReqs: true
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

    toggleShow = event => {
        event.preventDefault();
        this.setState({hidden: !this.state.hidden});
    }

    seePassReqs = () => {
        this.setState({hiddenReqs: false});
    }

    hidePassReqs = () => {
        this.setState({hiddenReqs: true});
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
                            type={this.state.hidden ? "password" : 'text'}
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.onChange}
                            onFocus={this.seePassReqs}
                            onBlur={this.hidePassReqs}
                        />
                    {this.state.hidden ?
                        <img src={view} className={classes.eye} onClick={this.toggleShow} alt=''/> :
                        <img src={noview} className={classes.eye} onClick={this.toggleShow} alt=''/>
                    }
                    {this.state.hiddenReqs ? '' :
                        <div className={classes['pass-reqs']}>
                            <p>Password must contain at least one special symbol [‘$’,’~’,’-‘,’_’],
                                uppercase letter, lowercase letter, digit</p>
                        </div>
                    }
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
