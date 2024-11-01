import React from 'react';
import { ThemeContext } from '../context/themeContext';

class Theme extends React.Component {
    // this.context 
    // when using one context 
    // we use contextType to identify this.context 
    // we can access all the values added in provider.
    // class components
    static contextType = ThemeContext; // -> this.context

    render() {
        return (
            <>
                <h2>My Theme</h2>
                <button onClick={this.context.toggleMode}>{this.context.mode}</button>
            </>
        )
    }
    
}

export default Theme;