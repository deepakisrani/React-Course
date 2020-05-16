// import _ from 'lodash'; // Convention to name it as _
import jsonPlaceholder from '../apis/jsonPlaceholder';


export const fetchPostsandUsers = () => async dispatch => {
    await dispatch(fetchPosts()); // When you call an action creator from inside an action creator it is your responsibility to dispatch its result
    // await waits for the dispatched function to finish execution before moving on.
};


// ActionCreators can't be async, when you make it async when you await you do not return a plain JS Object
export const fetchPosts = () => {
    // Redux-Thunk calls the returned function with dispatch and getState (from redux)
    // Because of this, we can manually dispatch our action (after our request is complete)
    return async (dispatch) => {
        const response = await jsonPlaceholder.get('/posts');

        dispatch({ type: "FETCH_POSTS", payload: response.data });
    };
};

// Unmemoized form
export const fetchUser = id => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({ type: "FETCH_USER", payload: response.data });
};


/*
export const fetchUser = id => dispatch => _fetchUser(id, dispatch);

// The function that needed to be memoized had to be put in a seperate variable as previously a new instance of the memoized was
// being created and returned and hence defeating the purpose of memoization.
// If you memoize though, you can't refetch this data in case of a change, so that is something to keep in mind.
const _fetchUser = _.memoize(async (id, dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({ type: "FETCH_USER", payload: response.data });
});

Can be refactored to: (but left as is for the comments and future reference)

export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');
    dispatch({ type: "FETCH_POSTS", payload: response });
};

*/
