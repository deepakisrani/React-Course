import React from 'react';

class GoogleAuth extends React.Component {
    
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID,
                scope: 'email'
            });
        });
    }

    render() {
        return <div className="item">Google Auth</div>;
    }
}

export default GoogleAuth;