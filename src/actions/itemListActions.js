// @flow

import { SELECT_ITEM, SET_LOADER, END_LOADER } from '../constants/actionTypes';
import { push } from 'connected-react-router';
import { demoData } from '../constants/demoData';
import { storage } from '../helpers/storage';

const later = (delay, value) =>
    new Promise(resolve => setTimeout(resolve, delay, demoData[value]));


/**
 * Retrieves the passed items data and Routes user to the passed item page.
 * @param {number} id The id of the item.
 * @param {boolean} timeTravel Flag for if user is timeTraveling.
 * @param {boolean} keepURL Flag for if url should change.
 * @returns {function} dispatches react-router push and item data update.
 */
export const selectItem = (id:number, timeTravel:bool, keepURL: bool) => {
  return (dispatch:Function) => {
    const path = '/item/' + id;
    const data = storage.getItem(path);
    if(data && data != 'undefined') {
      dispatch({
        type: SELECT_ITEM,
        data: JSON.parse(data)
      });
      if(!timeTravel && !keepURL) {
        dispatch(push(path));
      }
    } else {
      dispatch({type: SET_LOADER});
      later(1000, id) // fake ajax request
        .then(response => {
          if(response) {
            dispatch({
              type: SELECT_ITEM,
              data: response
            });
            storage.setItem(path, JSON.stringify(response));
            if(!keepURL) {
              dispatch(push(path));
            }
            dispatch({type: END_LOADER});
          } else {
            throw 'no data';
          }
        })
        .catch(() => {
          dispatch(push('/'));
          dispatch({type: END_LOADER});
        });
    }
  };
};

export { selectItem  as default };
