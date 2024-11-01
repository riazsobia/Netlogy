import React from 'react';
import ContentClass from './components/content-class';
import contentFunction from './components/content-function';
import Theme from './components/theme';
import Settings from './components/settings';
import { ThemeContext } from './context/themeContext';

class Main extends React.Component {
    
    static contextType = ThemeContext;

    render() {
        return (
            <main className={this.context.mode}>
                <section>
                    <ContentClass />
                    <contentFunction />
                    <aside>
                        <Settings />
                        <Theme />
                    </aside>
                </section>
            </main>
        )
    }
}

export default Main;