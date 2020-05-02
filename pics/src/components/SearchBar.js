import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    /* 
        Fixes for undefined "this":
        * Binding "this" inside constructor. this.functionName = this.functionName.bind(this) (Legacy method)
        * Turning function to arrow function (arrow functions bind the value of this inside the function)
        * Write a callback function which calls the function instead. (Inlining a callback)
    */

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    // onChange, onClick, onSubmit -> Examples of event handlers

    /*
        Uncontrolled Element means that you have to reach into the DOM to be able to tell what the value of the input field (in this example)
        is at any given moment in time, when the element had a listener instead of setting the value in the state,
        you could tell the value only when the user had input something.

        Source of truth/data was in the DOM and not the react component (before the rerender) || UNCONTROLLED
    */

    render () {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={e => this.setState({ term: e.target.value })} 
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;