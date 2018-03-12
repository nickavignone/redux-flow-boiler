import { SET_LOADER, END_LOADER } from '../../constants/actionTypes';

import initialState from './initState';

/**
 * Global Reducer, used for setting the state of the loader.
 * @param {object} state The current reducer state, defaulted to an initial state.
 * @param {object} action The type type and data dispatched.
 * @returns {object} the store object.
 */
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
