// @flow
import { SELECT_ITEM, REMOVE_ITEM } from '../constants/actionTypes';
import { push } from 'react-router-redux';
import { demoData } from '../constants/demoData';
import { storage } from '../helpers/storage';

const later = (delay, value) =>
    new Promise(resolve => setTimeout(resolve, delay, demoData[value]));

export const selectItem = (id:number, timeTravel:bool) => {
  return (dispatch:Function) => {
    const path = '/item/' + id;
    const data = storage.getItem(path);
    if(data && timeTravel) {
      dispatch({
        type: SELECT_ITEM,
        data: JSON.parse(data)
      });
    } else {
      later(1000, id)
        .then(response => {
          dispatch({
            type: SELECT_ITEM,
            data: response
          });
          storage.setItem(path, JSON.stringify(response));
          dispatch(push(path));
        });
    }
  };
};


export const removeItem = () => {
  return {
    type: REMOVE_ITEM,
    data: {}
  };
};