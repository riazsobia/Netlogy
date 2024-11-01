import {useContext}  from 'react';
import {SettingsContext} from '../context/settingsContext';

function Settings(props) {
    // on functional componet use :
    // useContext to access and subscribe to contexts.

    const context = useContext(SettingsContext);//context.title/context.setTitle ..etc

    return (
        <>
            <h2>Site Settings ..</h2>
            <label>
                <span>Title &nbsp;</span>
                <span>{context.title}</span>
                <input 
                    placeholder="change title"
                    name="title"
                    onChange={e=> context.setTitle(e.target.value)}
                    />
            </label>
            <hr/>
            <label>
                <span>Twitter &nbsp;</span>
                <span>{context.twitter}</span>
                <input 
                    placeholder="change twitter"
                    name="twitter"
                    onChange={e=> context.setTwitter(e.target.value)}
                    />
            </label>
        </>
    )
}

export default Settings;