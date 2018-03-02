import { SELECT_ITEM } from '../../constants/actionTypes';

import initialState from './initState';

export default function listItemReducer(state = initialState, action) {
  switch(action.type) {
    case SELECT_ITEM:
      return _.assign({}, state, {
        currentItem: action.data
      });
    default:
      return state;
  }
}
