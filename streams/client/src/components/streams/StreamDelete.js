import React from 'react';
import { connect } from 'react-redux';

import { fetchStream, deleteStream } from '../../actions'
import Modal from '../Modal';

class StreamDelete extends React.Component {

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    deleteStream = () => {
        this.props.deleteStream(this.props.match.params.id);
    }

    actions = (
        <React.Fragment>
            <button onClick={this.deleteStream} className="ui button negative">Delete</button>
            <button className="ui button">Cancel</button>
        </React.Fragment>
    );

    render() {
        if (!this.props.stream) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                StreamDelete
                <Modal 
                    title='Delete Stream'
                    content={`Are you sure you want to delete the stream "${this.props.stream.title}"?`}
                    actions={this.actions}
                />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);