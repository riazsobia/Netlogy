import React from 'react';
import {AuthContext} from '../../context/authContext';
import Show from '../show/show.js';

class Login extends React.Component {

    static contextType = AuthContext; // I have access to this.context

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();
        e.target.reset();
        // from the context do login
        console.log("this context----> ", this.context);
        this.context.login(this.state.username, this.state.password);
    }


    render() {
        return (
            <>
                <Show condition={this.context.loggedIn}>
                    <button onClick={this.context.logout}>Logout</button>
                </Show>
                <Show condition={!this.context.loggedIn}>
                    <form onSubmit={this.handleSubmit}>
                        <input onChange={this.handleChange} placeholder="username" name="username"/>
                        <input onChange={this.handleChange} type="password" placeholder="password" name="password" />
                        <button type="submit">Submit</button>
                    </form>
                </Show>
            </>
        )
    }
}

export default Login;