import React from 'react';
import Form from './form';
import People from './people';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            results: []
        }
    }

    handleForm = (count, results) => {
        // update state in parent component
        console.log("inside HandleForm!! ");
        this.setState({count, results});
    }

    render() {
        return (
            <>
                <Form buttonText="Hey, Get Star Wars People!!" handler={this.handleForm} />
                <People data={this.state.results} />
            </>
        )
    }
}

export default App;