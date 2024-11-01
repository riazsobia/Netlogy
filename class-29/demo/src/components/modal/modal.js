import './modal.scss';
import React from 'react';

const Modal = props => {
    return (
        <div className="overlay">
            <div className="modal">
                <div className="header">
                    <span className="title">{props.title}</span>
                    <button onClick={props.toggle}>X</button>
                </div>
                <div className="content">
                    {props.children}
                </div>
            </div>
        </div>
    )
}
export default Modal;