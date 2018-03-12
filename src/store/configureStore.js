import {createStore, compose, applyMiddleware} from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import { routerMiddleware } from 'react-router-redux';

/**
 * Sets prod version of the store object.
 * @param {History} browserHistory The History object from history/createBrowserHistory.
 * @returns {function} the store object.
 */
function configureStoreProd(browserHistory: History) {
  const middlewares = [
    thunk,
    routerMiddleware(browserHistory)
  ];

  return createStore(rootReducer, applyMiddleware(...middlewares));
}

/**
 * Sets dev version of the store object.
 * @param {History} browserHistory The History object from history/createBrowserHistory.
 * @returns {function} the store object.
 */
function configureStoreDev(browserHistory: History) {
  const middlewares = [
    // Add other middleware on this line...
    // Redux middleware that spits an error on you when you try to mutate your state either inside a dispatch or between dispatches.
    routerMiddleware(browserHistory),
    reduxImmutableStateInvariant(),
    thunk
  ];

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools
  const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(...middlewares)
    //DevTools.instrument()
    )
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}

const configureStore = process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev;

export default configureStore;

