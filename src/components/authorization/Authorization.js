import React from 'react';

import {withRouter} from 'react-router-dom'
import {connect} from "react-redux";
import * as AuthActions from '../../store/Auth/AuthActions';

import swal from "sweetalert";
import classes from './Authorization.module.css';

import view from './img/view.png';
import noview from './img/invisible.png';

class Authorization extends React.Component{
    state = {
        email:'',
        password:'',
        hidden: true,
        hiddenReqs: true
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.error !== this.props.error && this.props.error !== null){
            swal(this.props.error)
            return true;
        }else{
            return false;
        }
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
        this.setState({hiddenReqs: !this.state.hiddenReqs});
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
                        onMouseEnter={this.seePassReqs}
                        onMouseLeave={this.seePassReqs}
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
                    <div className={classes["login-btn"]} onClick={() => this.props.login(this.state.email, this.state.password, this.props)}>log in</div>
                    <div className={classes["login-btn"]} onClick={() => this.props.registration(this.state.email, this.state.password, this.props)}>register</div>
                </div>
            </form>
        )
    }
}

const mapStateToProps = state => {
    return {
        error: state.authReducer.error
    }
}

const mapDispatchToProps = dispatch => {
    return{
        login: (email, password, props) => dispatch(AuthActions.login(email, password, props)),
        registration: (email, password, props) => dispatch(AuthActions.registration(email, password, props))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Authorization));
