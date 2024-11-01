let initialState = {data: []};

// reducer
export default (state = initialState, action) => {
    const {type, payload} = action;
    console.log("Type in Reducer = ", type)
    switch (type) {
        case 'GET':
            console.log("payload >>>> ", payload)
            // I can play around with the response of the API
            // remove stuff/ add stuff
            return payload;
    
        default:
           return state;
    }
}