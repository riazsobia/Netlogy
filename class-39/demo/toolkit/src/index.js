import React from 'react';
import ReactDOM from 'react-dom';

import App from './app.js';

function Main() {
    return (
        <App/>
    )
}

const rootEl = document.getElementById('start');
ReactDOM.render(<Main/>, rootEl);