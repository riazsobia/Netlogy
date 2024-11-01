import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js';
import { Provider } from 'react-redux';
import store from './store/';

function Main() {
    return (
        <Provider store={store}>
            <App/>
        </Provider>
    )
}

const rootEl = document.getElementById('root');
ReactDOM.render(<Main/>, rootEl);
