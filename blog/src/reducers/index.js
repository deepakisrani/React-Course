import { combineReducers } from 'redux';
import postsReducer from './postsReducer';

/*
    Rules of Reducers:
    1. Must return any value other than undefined
    2. Produces new state using only the previous state and the action
    3. Reducers must be pure (Should not reach out of itself to decide return value [eg: make an api call])
    4. Must not mutate input state
*/

export default combineReducers({
    posts: postsReducer
});