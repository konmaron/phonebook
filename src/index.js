import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter} from "react-router-dom";
import {createStore, applyMiddleware} from "redux";
import {Provider} from 'react-redux';
import rootReducer from "./redux/rootReducer";
import thunk from "redux-thunk";

import App from './App';

import './index.css';

const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div className='container'>
                <App/>
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
