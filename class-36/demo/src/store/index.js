// Creating the store 
// and adding reducers to it
import votes from './votes.js'

import {createStore, combineReducers} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// add as many reducers as you want
let reducers = combineReducers({votes});

const store = () => {
    return createStore(reducers, composeWithDevTools())
}

export default store();
