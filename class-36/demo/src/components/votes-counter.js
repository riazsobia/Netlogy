import React from 'react';
import {connect} from 'react-redux';
import {increment, decrement, reset} from '../store/votes.js';

const VotesCounter = props => {
    return (
        <section>
            <ul>
                {props.myVotes.candidates.map((person, idx)=> {
                    return <li key={idx} onClick={()=> props.increment(person.name)} >{person.name} : {person.votes}</li>
                })}
            </ul>
            <button onClick={props.reset}>RESET ALL</button>
        </section>
    )
}

const mapStateToProps = state => ({
    myVotes: state.votes
});

const mapDispatchToProps = {increment, decrement, reset}

export default connect(mapStateToProps, mapDispatchToProps)(VotesCounter)