import React from 'react';
import {Link, NavLink} from 'react-router-dom';

const Header = props => {
    return (
        <header>
            <h1>Class 28 - Routing!</h1>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <a href="/">Home with a href</a>
                    </li>
                    <li>
                        <NavLink to="/render-me">Render Me</NavLink>
                    </li>
                    <li>
                        <NavLink to="/items">Items</NavLink>
                    </li>
                    <li>
                        <NavLink to="/items/one">One</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;