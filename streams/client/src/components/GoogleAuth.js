import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

/*
    The approach for this component is not ideal as it has direct access to gapi
    Convention would be to have an action creator have access to it and are responsible for changing the state of the app.
    Although that doesn't make too much of a difference.
*/

class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID,
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get()); // This is to initialize the state by sending an action
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn();
        }
        else {
            this.props.signOut();
        }
    }

    onSignInClick = () => {
        this.auth.signIn(this.auth.currentUser.get().getId());
    }

    onSignOutClick = () => {
        this.auth.signOut();
    }


    renderAuthButton() {

        if (this.props.isSignedIn === null ) {
            return null;
        }
        else if (this.props.isSignedIn) {
            return (
                <button onClick={this.onSignOutClick} className="ui red google button">
                    <i className="google icon" />
                    Sign Out
                </button>
            );
        }
        else {
            return (
                <button onClick={this.onSignInClick} className="ui red google button">
                    <i className="google icon" />
                    Sign In with Google
                </button>
            );
        }
    }

    render() {
        return <div className="item">{this.renderAuthButton()}</div>;
    }
}

const mapStateToProps = (state) => {
    return {
        isSignedIn: state.auth.isSignedIn
    };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);