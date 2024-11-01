import React, {useState} from 'react';

export const SettingsContext = React.createContext();

function SettingsProvider(props) {
    const [title, setTitle] = useState('Hanaa');
    const [twitter, setTwitter] = useState('hanaa_alghazzi');
    // const state = {
    //     title: title, 
    //     twitter : twitter, 
    //     setTitle: setTitle,
    //     setTwitter: setTwitter
    // }
    const state = {
        title, 
        twitter, 
        setTitle,
        setTwitter
    }

    return (
        <SettingsContext.Provider value={state}>
            {props.children}
        </SettingsContext.Provider>
    )
}

export default SettingsProvider;