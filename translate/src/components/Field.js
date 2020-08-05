import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component {
    static contextType = LanguageContext; // context object hooked up to a class component, naming has to be exactly like this
    // Context value can be accessed via this.context
    
    render() {
        const text = this.context === 'english' ? 'Name' : 'Naam';
        return (
            <div className="ui field">
                <label>{text}</label>
                <input />
            </div>
        );
    }
}

export default Field;