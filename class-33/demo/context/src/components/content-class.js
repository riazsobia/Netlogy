import React from 'react';
import {ThemeContext} from '../context/themeContext';
import {SettingsContext} from '../context/settingsContext';

class Content extends React.Component {
    
    // when you want to use multiple contexts in a class component
    // you can not use the static contextType = SettingContext, ThemeContext
    
    render() {
        return (
            <div>
                <strong>Rendered Via the class content component</strong>
                <SettingsContext.Consumer>
                    {
                        settingsContext=> (
                            <>
                                <h1>{settingsContext.title}</h1>
                                <div>
                                    <a href={`http://www.twitter.com/${settingsContext.twitter}`}>
                                        @{settingsContext.twitter}
                                    </a>
                                </div>
                            </>
                        )
                    }
                </SettingsContext.Consumer>
                <hr/>
                <ThemeContext.Consumer>
                    {
                        themeContext=> (
                            <h2>Current Mode : {themeContext.mode}</h2>
                        )
                    }
                </ThemeContext.Consumer>
            </div>

        )
    }
}  

export default Content;