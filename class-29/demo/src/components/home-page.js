import React from 'react';


class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }

    render() {
        return (
            <section>
               <h3>This is HomePage!</h3>
            </section>
         )
    }
}

export default HomePage;