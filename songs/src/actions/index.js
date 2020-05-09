// This file is named index because of how webpack behaves, if you were to import this file, you just need to mention the name of the folder

// ActionCreator
// Named Export
export const selectSong = (song) => {
    // Action has to have a type, payload is optional
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};