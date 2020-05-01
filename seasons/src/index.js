import React from 'react';
import ReactDOM from 'react-dom';

// Component will almost instantly rerender when the state is updated.
// State must be initialized when a component is created.
// State can only be updated using the function 'setState' || MOST IMPORTANT
class App extends React.Component {

    // JS function, not React's || One way to initialize state
    constructor(props) {
        super(props); // To make sure React.Component's constructor gets called

        this.state = { lat: null, errorMessage: '' }; // Initialized state: Only time we do a direct assignment to this.state

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                // Set the latitude in state
                this.setState({lat: position.coords.latitude});
            },
            (err) => {
                this.setState({errorMessage: err.message}); // Set state is additive, we only add or update state
            }
        );
    }

    componentDidMount() {
        console.log("Component did mount.");
    }

    componentDidUpdate() {
        console.log("Component did update.");
    }

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