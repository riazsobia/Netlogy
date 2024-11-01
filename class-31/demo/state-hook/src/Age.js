
import {useState} from 'react';

function Age(props) {
    console.log("props.age >>" , props.age)
    const [age, setAge] = useState(props.age || 0);
    // you can add as many variables as u want to the state
    const [name, setName] = useState(props.name || 'test name');
    console.log("age: ", age);
    // update age to equal 90;
    // console.log("age after setting to 90 ---> ", age);
    const updateAge =() => {
        let newAge = parseInt(age) + 1;
        setAge(newAge);
    }

    const updateName = (e) => {
        let newName = e.target.value;
        setName(newName);
    }

    return (
        <>
            <h2>{name}</h2>
            <h2>{age}</h2>
            <button onClick={updateAge}>update</button>
            <input type='text' onChange={updateName}/>
        </>
    )
}

export default Age;