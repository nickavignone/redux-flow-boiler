import { combineReducers } from 'redux';
import listItemReducer from './listItemReducer';
import { routerReducer } from 'react-router-redux';


const rootReducer = combineReducers({
  listItemReducer,
  router: routerReducer
});

export default rootReducer;
