import React from 'react';
import {connect} from 'react-redux';
// to show totlaVotes from the store

const Status = props => {
    return (
        <section>
          Status Component:   {props.votesProps.totalVotes}
        </section>
    )
}

// I do not have any action here so no need to do mapDispatchToProps
// I will only use mapStateToProps
const mapStateToProps = state =>({
    votesProps: state.votes
});

export default connect(mapStateToProps)(Status);
