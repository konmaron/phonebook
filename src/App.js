import React from 'react';
import Authorization from "./components/authorization/Authorization";
import withAppContext from "./context/withAppContext";
import Main from "./components/main/Main";

class App extends React.Component{
    render() {
        return (
            <>
                {this.props.context.token ? <Main/> : <Authorization/>}
            </>
        );
    }

}

export default withAppContext(App);

