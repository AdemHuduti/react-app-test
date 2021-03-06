import axios from 'axios';
import { SAVE_COMMENT, FETCH_COMMENTS } from 'actions/types';

const url = 'http://jsonplaceholder.typicode.com/comments';

export function saveComment(comment) {
  return {
    type: SAVE_COMMENT,
    payload: comment
  }
}


export function fetchComments() {  
  const request = axios.get(url);
  return {
    type: FETCH_COMMENTS,
    payload: request
  }
}