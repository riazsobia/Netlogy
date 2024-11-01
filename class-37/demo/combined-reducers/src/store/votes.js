let initialState = {
    totalVotes: 0
}

export default (state = initialState, action) => {
    let {type, payload} = action;
    switch(type) {
        case 'INCREMENT':
            return {...state, totalVotes: state.totalVotes + 1}
        case 'RESET':
            return initialState;
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