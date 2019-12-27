import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './styles/index.scss';
import "antd/dist/antd.css";

import configuredStore from './store'
import App from './App';

const { store } = configuredStore()

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

