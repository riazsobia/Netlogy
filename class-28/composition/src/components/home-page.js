import React from 'react';
import {If, Then, Else} from './if';
import Modal from './modal/modal.js'


class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }

    toggleModal = () =>  {
        console.log("toggleModal ..")
        this.setState({open: !this.state.open})
        console.log("this.state.open: ", this.state.open)
    }

    render() {
        return (
            <section>
                <If condition={this.state.open}>
                    <Then>
                        <p>In thennnn</p>
                        <Modal title="Home Page Modal :D" toggle={this.toggleModal}>
                            <div>Modal Content is here .... </div>
                        </Modal>
                    </Then>
                    <Else>
                        <p>In else</p>
                        <button onClick={this.toggleModal}>Click to Open Modal !</button>
                    </Else>
                </If>
            </section>
         )
    }
}

export default HomePage;