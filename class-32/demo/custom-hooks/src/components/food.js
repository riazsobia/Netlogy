import React, {useState} from 'react';
import useForm from '../hooks/form';

function Food() {
    const [formData, setFormData] = useState({});
    const [handleSubmit, handleChange, values] = useForm(eat);
    
    function eat(foodObj) {
        console.log("inside the component eat callback--> ", foodObj);
        setFormData(foodObj);
    }
    
    return (
        <div>
            <h2>using Form Hooks </h2>
            <form onSubmit={handleSubmit}>
                <input name="food" type="text" placeholder="Food Name" onChange={handleChange} />
                <input name="calories" type="number" placeholder="Calories" onChange={handleChange} />
                <button type="submit">Submit</button>
            </form>
            <strong>Values - Food Form Values from my custom Hook:</strong>
            {
                Object.keys(values).map((item, index)=><p key={index}>{item} - {values[item]}</p>)
            }
            <br/>
             <strong>formData - Food Form Values internal state:</strong>
            {
                Object.keys(formData).map((item, index)=><p key={index}>{item} - {formData[item]}</p>)
            }
        </div>
    )

}

export default Food;