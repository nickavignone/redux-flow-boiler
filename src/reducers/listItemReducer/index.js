import { TEST } from '../../constants/actionTypes';

import initialState from './initState';

export default function listItemReducer(state = initialState, action) {
  switch(action.type) {
    case TEST:
      return _.assign({}, state, {
        loader: true
      });
    default:
      return state;
  }
}
