
import {useContext} from 'react';
import {ThemeContext} from '../context/themeContext';
import {SettingsContext} from '../context/settingsContext';

function ContentFunction(props) {
    // simply use useContext as many times as you want
    const settingsContext = useContext(SettingsContext);
    const themeContext = useContext(ThemeContext);

    return (
        <div>
            <strong>Rendered Via the Content Function Componet</strong>
            <h1>{settingsContext.title}</h1>
            <div>
                <a href={`http://www.twitter.com/${settingsContext.twitter}`}>
                    @{settingsContext.twitter}
                </a>
            </div>
            <hr/>
            <h2>Current Mode : {themeContext.mode}</h2>
        </div>
    )
}

export default ContentFunction;