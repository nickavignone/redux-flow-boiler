import { combineReducers } from 'redux';
import listItemReducer from './listItemReducer';
import globalReducer from './globalReducer';
import { connectRouter } from 'connected-react-router';

export default (history) => combineReducers({
  router: connectRouter(history),
  listItemReducer,
  globalReducer
});
