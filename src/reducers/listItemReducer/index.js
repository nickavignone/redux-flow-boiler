import { SELECT_ITEM } from '../../constants/actionTypes';

import initialState from './initState';


/**
 * Item List Reducer.
 * @param {object} state The current reducer state, defaulted to an initial state.
 * @param {object} action The type type and data dispatched.
 * @returns {object} the store object.
 */
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
