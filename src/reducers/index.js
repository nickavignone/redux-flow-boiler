import { combineReducers } from 'redux';
import listItemReducer from './listItemReducer';
import globalReducer from './globalReducer';
import { routerReducer } from 'react-router-redux';


const rootReducer = combineReducers({
  listItemReducer,
  globalReducer,
  router: routerReducer
});

export default rootReducer;
