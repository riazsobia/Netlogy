import superagent from 'superagent';

// .env
const api = 'https://api-server-janabi.herokuapp.com/api/v1/todo';

// action creator function returns an object 
// I am returning a function that has a call for superagent API
export const getRemoteData = () => (dispatch) => {
    console.log("dispatch :", dispatch)
    console.log("inside dispatch of getRemoteData!!!! ")
    return superagent.get(api).then(data=> {
        console.log("we got the data : data.body =", data.body)
        dispatch(getAction(data.body))
    });
}

// action creator function.
const getAction = payload => {
    console.log("in getAction@@@@@@@@@!!!!")
    return {
        type: 'GET',
        payload: payload
    }
}