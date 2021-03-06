import React from 'react';
import ReactDOM from 'react-dom';
import './styles/reset.css';
import './styles/main.css';
import App from './App';
import { unregister } from './registerServiceWorker';
import store from './store';
import { Provider } from 'react-redux';

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>

, document.getElementById('root'));
unregister();
