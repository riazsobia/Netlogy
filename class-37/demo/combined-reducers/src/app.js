import React from 'react';

import Status from './components/status';
import VotesCounter from './components/votes-counter';

export default props => {
    return (
        <>
            <Status/>
            <VotesCounter />
        </>
    )
};