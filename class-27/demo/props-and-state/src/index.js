import React from 'react';
import ReactDOM from 'react-dom';

import App from './star-wars-app.js';

class Main extends React.Component {
    render() {
        return <App/>;
    }
}

const rootElement = document.getElementById("my-root");
ReactDOM.render(<Main/>, rootElement);