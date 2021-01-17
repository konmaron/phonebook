import React from 'react';

import Authorization from "./components/authorization/Authorization";
import Main from "./components/main/Main";

import {connect} from 'react-redux'

class App extends React.Component{
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
        token: state.authReducer.token
    }
}

export default connect(mapStateToProps, null)(App);

