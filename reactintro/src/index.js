// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom'

// Create a react component
// Components can be function based or Class based, below is an example of function based component.

const App = () => {

    const text = { button: 'Click Me!', label: 'Enter Name:' }
    const buttonStyle = {
        backgroundColor: 'blue',
        color: 'white'
    };

    return (
        <div>
            <label className="label" htmlFor="name">{text.label}</label>
            <input id="name" type="text" />
            <button style={buttonStyle}>{text.button}</button>
        </div>
    );
};

// Take the react component and show it on the screen
ReactDOM.render(
    <App />, 
    document.querySelector("#root")
);