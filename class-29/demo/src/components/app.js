import React from 'react';
import { BrowserRouter, MemoryRouter, HashRouter } from 'react-router-dom';

import Header from './header';
import Footer from './footer';
import Main from './main';

// Try switching between different Router Types:
// BrowserRouter, MemoryRouter, HashRouter 
const App = props => {
    return (
        <BrowserRouter>
            <Header/>
            <Main/>
            <Footer/>
        </BrowserRouter>
    )
}

export default App;