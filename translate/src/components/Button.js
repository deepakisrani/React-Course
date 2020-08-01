import React from 'react';

import LanguageContext from '../contexts/LanguageContext';

class Button extends React.Component {
    static contextType = LanguageContext; // context object hooked up to a class component, naming has to be exactly like this
    // Context value can be accessed via this.context

    render() {
        const text = this.context === 'english' ? 'Submit' : "Voorleggen";
        return <button className="ui button primary">{text}</button>
    }
}

export default Button;