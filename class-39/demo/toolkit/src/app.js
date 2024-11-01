import React from 'react';
import { Provider } from 'react-redux';
import rtkStore from './rtk-store/';
import People from './components/people';

export default props => {
    return (
        <Provider store={rtkStore}>
            <People/>
        </Provider>
    )
}