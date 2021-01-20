import React from 'react';

import Authorization from "./components/authorization/Authorization";
import Main from "./components/main/Main";

import swal from "sweetalert";
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux'

class App extends React.Component{
    componentDidMount() {
        if(this.props.token){
            return true;
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.token){
            return true;
        }else if(!this.props.token && prevProps.token !== this.props.token){
            swal('See you soon!');
            return true;
        }

    }

    render() {
        return (
            <>
                {this.props.token ? <Main/> : <Authorization/>}
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        token: !!state.authReducer.token
    }
}

export default connect(mapStateToProps, null)(withRouter(App));

