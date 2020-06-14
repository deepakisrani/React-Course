import React from 'react';
import { connect } from 'react-redux';

import { fetchStream, editStream } from '../../actions'
import StreamForm from './StreamForm';

class StreamEdit extends React.Component  {

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    onSubmit = (formValues) => {
        const streamId = this.props.stream.id;
        this.props.editStream(streamId, formValues);
    }

    render() {
        const stream = this.props.stream;
        if(!stream) {
            return <div>Loading...</div>;
        }

        // initialValues is a special prop of redux-form, if you pass that it autofills inputs with values you passed provided they match
        // the key value pair with the name provided for the Field component
        return (
            <div>
                <h3>Edit a Stream</h3>
                <StreamForm onSubmit={this.onSubmit} initialValues={this.props.stream} />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
};

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);