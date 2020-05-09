import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {
    generateSongList() {
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button
                            onClick={() => this.props.selectSong(song)}
                            className="ui button primary"
                        >
                            Select
                        </button>
                    </div>
                    <div className="content">
                        {song.title}
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <div className="ui middle aligned divided list">
                {this.generateSongList()}
            </div>
        );
    }
}

// By Convention this is the name of the function
// You can call it whatever you want
// State here is the state inside the redux store
// This function is called with all the data in the redux store
// Anytime the state is changed in redux or we rerun our reducers and produce a new state object this function is rerun with the new state object
const mapStateToProps = (state) => {
    return { songs: state.songs};
};

// Passing the actioncreator inside an object as the second argument for the connect function
// If you call the function (now inside props), it will automatically take the action returned and send it to redux's dispatch function
export default connect(mapStateToProps, { selectSong })(SongList);
