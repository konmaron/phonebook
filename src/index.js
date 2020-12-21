import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppContextProvider from "./context/AppContextProvider";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
    <AppContextProvider>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </AppContextProvider>,
    document.getElementById('root')
);
