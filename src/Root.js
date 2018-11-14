// @flow

import React, { Component } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import configureStore from './store/configureStore';
const history = createBrowserHistory();
const store = configureStore(history);

type Props = {
  routes: any
};

export default class Root extends Component<Props> {

  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          {this.props.routes()}
        </ConnectedRouter>
      </Provider>
    );
  }
}
