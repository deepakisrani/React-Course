import React from 'react';

import SearchBar from './SearchBar';
import youtube, { baseSearchParams } from '../apis/youtube';

class App extends React.Component {

    onFormSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                ...baseSearchParams,
                q: term
            }
        });

        console.log(response);
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