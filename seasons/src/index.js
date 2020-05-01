import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

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

    // setState also re-renders any children components too

    // componentDidUpdate: Called after each update, good for doing some data loading when the state changes. || Like making network calls after a user clicks a button

    // componentWillUnmount is good for cleaning up of data.
    // More methods, very rarely used: shouldComponentUpdate, getDerivedStateFromProps, getSnapshotBeforeUpdate

    // You should avoid conditional rendering, and rather move the conditionals in a helper like this
    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        }
        
        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} /> //State of parent component can be prop for child.
        }
        
        return <Spinner message="Please accept location request" />;
    }

    // Requirement of React, we have to define a render function.
    render() {
        // Don't initialize any work or request from render, because this gets called frequently
        return (
            <div>
                {this.renderContent()}
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));