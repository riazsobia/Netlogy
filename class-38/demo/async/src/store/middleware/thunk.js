// instead of npm i redux-thunk 
// we are creating this, 
//no need to do this manually just install the package

// #1 : capture any action call by this middleware
export default store => next => action => {
    console.log("action -----> ", action);
    console.log("typeof action >>> ", typeof action)
    typeof action == 'function' ? 
        action(store.dispatch, store.getState)
        : next(action);
}