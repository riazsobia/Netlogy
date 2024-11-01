import React from 'react';
import {connect} from 'react-redux';
import { increment, reset, disable} from '../store/candidates';

const VotesCounter = props => {
    return (
        <section>
            <table>
                <thead>
                    <tr>
                        <th>Candidate</th>
                        <th>Votes</th>
                        <th>Percentage</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {props.candidates.map((candidate, idx)=> 
                        <tr 
                            onDoubleClick={()=>props.disable(candidate.name)}
                            key={idx}>
                            <td>{candidate.name}</td>
                            <td>{candidate.votes}</td>
                            <td>{props.votes.totalVotes ? ((candidate.votes / props.votes.totalVotes) * 100).toFixed(2) : 0} %</td>
                            <td><button onClick={ ()=>{ candidate.disabled ? {} : props.increment(candidate.name)} }>Vote</button></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </section>
    )
}

const mapStateToProps = state => ({
    candidates: state.candidates,
    votes: state.votes
});

const mapDispatchToProps = {increment, reset, disable};

export default connect(mapStateToProps, mapDispatchToProps)(VotesCounter);