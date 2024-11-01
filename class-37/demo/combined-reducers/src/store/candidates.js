let initialState = [
    {name: 'Fatima', votes:0},
    {name: 'Aisha', votes:0},
    {name: 'Jackie', votes:0}
];

export default (state = initialState, action) => {
    let {type, payload} = action;
    switch (type) {
        case 'INCREMENT':
            return state.map(candidate=> {
                if(candidate.name == payload && !candidate.disabled) {
                    return {name: candidate.name, votes: candidate.votes+1}
                } else {
                    return candidate;
                }
            });
        case 'RESET':
            return initialState;
        case 'DISABLE':
            return state.map(candidate=> candidate.name == payload ? {...candidate, disabled:true}: candidate)
        default:
            return state;
    }
}

export const increment = (name) => {
    return {
        type: 'INCREMENT',
        payload: name
    }
}
export const reset = () => {
    return {
        type: 'RESET'
    }
}
export const disable = (name) => {
    return {
        type: 'DISABLE',
        payload: name
    }
}