import React from 'react';
import List from './list/index.js'
import HomePage from './home-page';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {name: 'Husam'},
                {name: 'Aisha'}
            ]
        }
    }

    // Use LifeCycle Method
    componentDidMount() {
        console.log("after render ----> did mount !!! ");
        // update this.state.items from an API response
        // from swapi for example
    }

    render() {
        console.log("========> in the render method !!!")
        let items = this.state.items.map((person, i)=> <li key={i}>{person.name}</li>)
        return (
            <main>
                <List>{items}</List>
                <HomePage />
            </main>
        )
    }
}

export default Main;