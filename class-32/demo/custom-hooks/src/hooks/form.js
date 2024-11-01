// useState & useForm are react built in hooks
// starts with use -> useNameOfMyCustomHooks
// useForm
// Generic Form Handler
// no JSX to be returned. (not a component)
// Custom Hook -> form functionalities.
// handleSubmit -> form submit
// handleChange -> input change
import {useState} from 'react';
// const [state, setState]  = useState(initialValue)
// const [handleSubmit, handleChange, values] = useForm(callback);
const useForm = (callback) => {
    const [values, setValues] = useState({});
    
    const handleSubmit = (e) => {
        if (e) e.preventDefault();
        // get values
        // and run callback (function passed by the component)
        callback(values);
    }
    const handleChange = (e) => {
        // update the state
        // for the field name that I am changing add/update it with the new value.
        setValues({...values, [e.target.name]: e.target.value});
        console.log("Generic Hook Change Handler", values)
    }
   
    return [handleSubmit, handleChange, values];
}

export default useForm;