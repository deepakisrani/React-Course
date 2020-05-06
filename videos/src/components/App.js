import React from 'react';

import SearchBar from './SearchBar';

class App extends React.Component {

    onFormSubmit = (term) => {
        console.log(term);
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onFormSubmit} />
            </div>
        );
    }
}

export default App;