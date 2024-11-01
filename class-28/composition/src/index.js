import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app.js';

class Index extends React.Component {
    render() {
        return (
            <React.StrictMode>
                <App/>
            </React.StrictMode>
        )
    }
} 

const rootElem = document.getElementById("root");
ReactDOM.render(<Index />, rootElem);