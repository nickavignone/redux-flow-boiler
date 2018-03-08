import { SET_LOADER, END_LOADER } from '../../constants/actionTypes';

import initialState from './initState';

export default function globalReducer(state = initialState, action) {
  switch(action.type) {
    case END_LOADER:
      return _.assign({}, state, {
        loader: false
      });
    case SET_LOADER:
      return _.assign({}, state, {
        loader: true
      });
    default:
      return state;
  }
}
