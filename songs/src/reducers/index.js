import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'Gooey', duration: '4:24'},
        { title: 'Pools', duration: '3:21'},
        { title: 'Black Mambo', duration: '4:53'},
        { title: 'Life Itself', duration: '3:57'}
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === "SONG_SELECTED") {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers(
    {
        songs: songsReducer,
        selectedSong: selectedSongReducer
    }
);