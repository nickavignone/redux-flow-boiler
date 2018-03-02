import { SELECT_ITEM } from '../../constants/actionTypes';

import initialState from './initState';

export default function listItemReducer(state = initialState, action) {
  switch(action.type) {
    case SELECT_ITEM:
      return _.assign({}, state, {
        curentItem: action.data
      });
    default:
      return state;
  }
}
