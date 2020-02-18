import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import {CookiesProvider} from 'react-cookie';
import {  Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './index.css';
import App from './App';
import history from './history'
import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer);
ReactDOM.render(
    <Provider store = {store}>
      <Router history={history} >
        <App />
      </Router>
    </Provider> 
      
    
, document.getElementById('app'));
