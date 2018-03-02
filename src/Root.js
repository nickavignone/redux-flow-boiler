import React, { Component } from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import configureStore from './store/configureStore';
const history = createHistory();
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