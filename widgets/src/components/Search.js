import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [debouncedTerm, setDebouncedTerm] = useState(searchTerm);
    const [results, setResults] = useState([]);


    useEffect(() => {

        const timerId = setTimeout(() => {
            setDebouncedTerm(searchTerm)
        }, 500);

        // Cleanup function for useEffect, performed before rerender which fulfills the condition
        return () => {
            clearTimeout(timerId);
        }

    }, [searchTerm]);

    
    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: debouncedTerm
                }
            });

            setResults(data.query.search);
        };

        if (debouncedTerm) {
            search();
        }
    }, [debouncedTerm]);

    const renderedResults = results.map((result) => {
        return (
            <div className="item" key={result.pageid}>
                <div className="right floated content">
                    <a 
                    className="ui button"
                    href={`https://en.wikipedia.org?curid=${result.pageid}`}
                    target="blank"
                    >
                        Go
                    </a>
                </div>
                <div className="content">
                    <div className="header">
                        { result.title }
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
                </div>
            </div>
        );
    });

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input
                        className="input"
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>
            <div className="ui celled list">
                { renderedResults }
            </div>
        </div>
    );
}

export default Search;