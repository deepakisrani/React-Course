import React from 'react';
import { connect } from 'react-redux';

import { fetchStream } from '../../actions'

class StreamEdit extends React.Component  {

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    render() {
        const stream = this.props.stream;
        if(!stream) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <div>{stream.title}</div><br/>
                <div>{stream.description}</div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
};

export default connect(mapStateToProps, { fetchStream })(StreamEdit);