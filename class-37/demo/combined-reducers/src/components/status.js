// Winner/Leader component
import React from 'react';
import {connect} from 'react-redux';

// lodash 
// underscore 

const Status = props => {
    
    let currentLeader = {name: '', votes: 0}
    let leader = props.candidates.reduce((winning, record) => {
        let r = record.votes > winning.votes ? record: winning;
        console.log("r ---> ", r);
        return r;
    }, currentLeader);
    
    return (
        <section>
            <span> Current Leader: {leader.name}</span>
            <span>Votes: {props.votes.totalVotes}</span>
        </section>
    )
}

const mapStateToProps = state => ({
    votes: state.votes,
    candidates: state.candidates
});

export default connect(mapStateToProps)(Status);
