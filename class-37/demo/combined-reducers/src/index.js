import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './app';
import store from './store/';

function Main() {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}

const rootElm = document.getElementById("root");
ReactDOM.render(<Main/>, rootElm);
