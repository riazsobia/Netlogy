// state, reducer, action->using the redux toolkit
import { createSlice } from '@reduxjs/toolkit';

const peopleSlice = createSlice({
    name: 'people',
    initialState: [
        {name: 'rtk-Aisha'},
        {name: 'rtk-Fatima'},
        {name: 'rtk-Jackie'}
    ],
    reducers: {
        add(state, action) {
            console.log(" >>>>>> in add ");
            state.push({name: action.payload});
        },
        remove(state, action) {
            return state.filter(person=> person.name !== action.payload)
        }
    }
});
console.log("peopleSlice ::::::: ", peopleSlice);
export const {add, remove} = peopleSlice.actions;
export default peopleSlice.reducer;