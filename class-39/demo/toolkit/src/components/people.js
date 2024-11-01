import React, {useState} from 'react';

import {connect} from 'react-redux';
import {add, remove} from '../rtk-store/people.store.js';

const People = props => {

    const [name, setName] = useState('');
    const handleChange = e => {
        setName(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        e.target.reset();
        props.add(name);
    }

    return(
        <section>
            <ul>
                {props.people.map((person, idx)=> {
                    return <li key={idx} onClick={ ()=> props.remove(person.name) }>{person.name}</li>
                })}
            </ul>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} />
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}

const mapStateToProps = state => ({
    people: state.people
});

const mapDispatchToProps = {add, remove};

export default connect(mapStateToProps, mapDispatchToProps)(People)