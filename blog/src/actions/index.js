import jsonPlaceholder from '../apis/jsonPlaceholder';

// ActionCreators can't be async, when you make it async when you await you do not return a plain JS Object
export const fetchPosts = () => {
    // Redux-Thunk calls the returned function with dispatch and getState (from redux)
    // Because of this, we can manually dispatch our action (after our request is complete)
    return async (dispatch) => {
        const response = await jsonPlaceholder.get('/posts');

        dispatch({ type: "FETCH_POSTS", payload: response.data });
    };
};

export const fetchUser = (id) => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({ type: "FETCH_USER", payload: response.data });
};

/*
Can be refactored to: (but left as is for the comments and future reference)

export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');
    dispatch({ type: "FETCH_POSTS", payload: response });
};

*/
