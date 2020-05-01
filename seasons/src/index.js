import React from 'react';
import ReactDOM from 'react-dom';

// Component will almost instantly rerender when the state is updated.
// State must be initialized when a component is created.
// State can only be updated using the function 'setState' || MOST IMPORTANT
class App extends React.Component {

    /*
    // JS function, not React's || One way to initialize state || Best practices state to not load up data in constructor.
    constructor(props) {
        super(props); // To make sure React.Component's constructor gets called

        this.state = { lat: null, errorMessage: '' }; // Initialized state: Only time we do a direct assignment to this.state
    }
    */

    state = { lat: null, errorMessage: '' }; // Another way of initializing state, transpiler will turn it into the constructor anyway

    // Used for data loading etc, called only once.
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({lat: position.coords.latitude}),
            (err) => this.setState({errorMessage: err.message}) // Set state is additive, we only add or update state
        );
    }

    // Called after each update, good for doing some data loading when the state changes. || Like making network calls after a user clicks a button
    componentDidUpdate() {
        console.log("Component did update.");
    }


    // componentWillUnmount is good for cleaning up of data.
    // More methods, very rarely used: shouldComponentUpdate, getDerivedStateFromProps, getSnapshotBeforeUpdate

    // Requirement of React, we have to define a render function.
    render() {
        // Don't initialize any work or request from render, because this gets called frequently
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        }
        
        if (!this.state.errorMessage && this.state.lat) {
            return <div>Latitude: {this.state.lat}</div>;
        }
        
        return <div>Loading!</div>;
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));