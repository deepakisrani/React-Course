import React, { Component } from 'react';
import { connect } from 'react-redux';

const requireAuth = (ChildComponent) => {
    class ComposedComponent extends Component {
        componentDidMount() {
            this.shouldNavigateAway();
        }
    
        componentDidUpdate() {
            this.shouldNavigateAway();
        }
    
        shouldNavigateAway() {
            if(!this.props.auth) {
                this.props.history.push('/');
            }
        }

        render () {
            return <ChildComponent {...this.props} />;
        }
    }

    const mapStateToProps = function(state) {
        return { auth: state.auth };
    }

    return connect(mapStateToProps)(ComposedComponent);
};

export default requireAuth;