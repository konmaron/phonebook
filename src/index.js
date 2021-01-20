import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter} from "react-router-dom";
import {createStore, applyMiddleware, compose} from "redux";
import {Provider} from 'react-redux';
import rootReducer from "./store/rootReducer";
import thunk from "redux-thunk";

import App from './App';

import './index.css';

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk),
);

const store = createStore(rootReducer, enhancer)

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
