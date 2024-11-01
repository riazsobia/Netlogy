// 1- adding an initial state
// 2- creating reducers and exporting them
// 3- create actions and export them
let initalState = {
    candidates: [
        {name: 'Fatima', votes: 0},
        {name: 'Aisha', votes: 0},
        {name: 'Jack', votes: 0}
    ], 
    totalVotes: 0
}
// reducer:
export default (state = initalState, action) => {
    //update the state based on an action
    // increment, decrement, reset votes action
    console.log("action in reducer ---> ", action)
    console.log("state ---> ", state)
    let {type, payload} = action;
    switch(type) {
        case 'INCREMENT':
            // increment a specific canidates votes
            let totalVotes = state.totalVotes;
            let candidates = state.candidates.map(candidate=> {
                if (candidate.name == payload) {
                    totalVotes++;
                    return {name: candidate.name, votes: candidate.votes + 1}
                } else {
                    return candidate;
                }
            });
            // return the updated state
            console.log("candidates  : ", candidates)
            console.log("totalVotes ::: ", totalVotes)
            return {candidates, totalVotes};
        case 'DECREMENT':
            let decrementedVotes = state.totalVotes;
            let decrementedCandidates = state.candidates.map(candidate=> {
                if (candidate.name == payload) {
                    decrementedVotes --;
                    return {name: candidate.name, votes: candidate.votes - 1}
                } else {
                    return candidate;
                }
            });
            return {decrementedCandidates, decrementedVotes};
        case 'RESET':
            return initalState; 
        default:
            return state;
    }
}

// actions:
export const increment = (name) => {
    console.log("in increment action name=", name);
    return {
        type: 'INCREMENT',
        payload: name
    }
}
export const decrement = (name) => {
    return {
        type: 'DECREMENT',
        payload: name
    }
}
export const reset = () => {
    return {
        type: 'RESET'
    }
}