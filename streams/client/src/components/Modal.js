import React from 'react';
import ReactDOM from 'react-dom';
import history from '../history';

// Portals are used when you don't want to render a component to the same div as the root for the application

const Modal = props => {
    return ReactDOM.createPortal(
        <div onClick={() => history.push('/')} className="ui dimmer modals visible active">
            <div onClick={(e) => e.stopPropagation()} className="ui standard modal visible active">
                <div className="header">{props.header}</div>
                <div className="content">{props.content}</div>
                <div className="actions">
                    <button className="ui primary button" onClick={props.affirmativeAction}>{props.affirmativeText}</button>
                    <button className="ui button">Cancel</button>
                </div>
            </div>
        </div>, 
        document.querySelector('#modal')
    );
};

export default Modal;