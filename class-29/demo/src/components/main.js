import React from 'react';
import {Route, Switch } from 'react-router-dom';
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
        // console.log("after render ----> did mount !!! ");
        // update this.state.items from an API response
        // from swapi for example
    }

    render() {
        // console.log("========> in the render method !!!")
        let items = this.state.items.map((person, i)=> <li key={i}>{person.name}</li>)
        return (
            <main>
                <Switch>
                    <Route exact path="/">
                        <HomePage />
                    </Route>
                    <Route exact path="/items">
                        <List>{items}</List>
                    </Route>
                    <Route exact path="/items/one">
                        <div>One Item only </div>
                    </Route>
                    <Route exact path="/render-me" render={()=> <h2>Render Me</h2>}></Route>
                    <Route>
                        <div>404 Page Not</div>
                    </Route>
                </Switch>
                
            </main>
        )
    }
}

export default Main;