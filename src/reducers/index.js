import { combineReducers } from 'redux';
import CommentRedcers from 'reducers/comments';
import FetchReducer from './comments';

export default combineReducers({
  comments: CommentRedcers,
  fetchComments: FetchReducer
});