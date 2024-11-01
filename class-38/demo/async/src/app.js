import {connect} from 'react-redux';

import './app.css';
import * as actions from './store/actions';
// import {getRemoteData} from './store/actions


function App(props) {
  
  const fetchData = (e) => {
    // get data from API
    // if it was a form we need to preventDefault
    props.get();
  }

  return (
    <>
      <button onClick={fetchData}>Get Data!</button>
      {
        props.results.data.map((record, idx)=> {
           return <div key={idx}>{record.text}</div>
        })
      }
    </>
  );
}

const mapStateToProps = state => ({
    results: state.data
});
//actions to fetch data
const mapDispatchToProps = (dispatch, getState) => ({
    get: () => dispatch(actions.getRemoteData())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
