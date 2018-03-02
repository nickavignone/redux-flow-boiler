import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import routes from './routes';

const rootEl = document.getElementById('app');
const renderApp = appRoutes =>
  ReactDOM.render(
    <AppContainer>
      <Root routes={appRoutes} />
    </AppContainer>,
    rootEl
  );
renderApp(routes);

if (module.hot) {
  module.hot.accept('./routes', () => {
    const newRoutes = require('./routes').default;
    renderApp(newRoutes);
  });
}