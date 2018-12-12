import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


import { createStore, applyMiddleware, compose } from "redux";
import { Router } from "react-router-dom";
import {Provider} from "react-redux";
import thunk from "redux-thunk";



import initial from './data/initial';
import reducer from './data/reducer';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, 
              initial,
              composeEnhancers(applyMiddleware(thunk)));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA


ReactDOM.render(
    <Provider store={store}>
    	<router>
            <App tasks={ store.getState().tasks } />
        </router>
    </Provider>,
    document.getElementById("root"),
);
serviceWorker.unregister();
