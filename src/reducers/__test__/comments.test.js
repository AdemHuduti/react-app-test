import CommentsReducer from 'reducers/comments';
import { SAVE_COMMENT } from '../../actions/types';

it('handles actions of type SAVE_COMMENT', () => {
  const action = {
    type: SAVE_COMMENT,
    payload: 'New Comment'
  }

  const NewState = CommentsReducer([], action);
  
  expect(NewState).toEqual(['New Comment'])
});

it('handles action with unknow types', () => {
  const newState = CommentsReducer([], {});

  expect(newState).toEqual([]);
});