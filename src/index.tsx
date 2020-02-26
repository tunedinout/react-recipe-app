import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import './index.css';
import App from './App';
import history from './history';
import rootReducer from './reducers/RootReducer';

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
      <Router history={history} >
        <App/>
      </Router>
    </Provider>,
    document.getElementById('app'),
);
