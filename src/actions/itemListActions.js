import { SELECT_ITEM } from '../constants/actionTypes';
import { push } from 'react-router-redux';
import { demoData } from '../constants/demoData';

console.log(demoData);
console.log(SELECT_ITEM);

const later = (delay, value) =>
    new Promise(resolve => setTimeout(resolve, delay, demoData));

export const selectItem = (id) => {
  return (dispatch) => {
    later(1000, 100)
      .then(response => {
        dispatch({
          type: SELECT_ITEM,
          data: response[id]
        });
        const path = '/item/' + id;
        dispatch(push(path));
      })
  };
};

export const removeItem = () => {
  return {
    type: CHANGE_SECTION,
    data: {sections : getFlowObj({}, 2)}
  };
};