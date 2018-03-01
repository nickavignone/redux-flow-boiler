import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import configureStore from './store/configureStore';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { App, FormContainer }  from "components";

//let initialState = {};
const history = createHistory();
const store = configureStore(history);


ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App>
        <Switch>
          <Route exact path="/" component={ListDisplay}/>
          <Route exact path="/item/:itemId" component={ItemDisplay}/>
        </Switch>
      </App>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
);

/*
render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={MyProducts}/>
        <Redirect from="request" to="request/issue"/>
        <Route path="request" component={Service}>
          <Route path="issue" component={SrIssueSelectionContainer} />
          <Route path="contact" component={SrContactContainer} />
          <Route path="schedule" component={SrScheduleContainer} />
          <Route path="review" component={SrReviewContainer} />
        </Route>
        <Route path="request/confirm" component={SrConfirmContainer} />
        <Route path="service-details" component={ServiceDetails} />
        <Route path="warranty" component={Warranty} />
      </Route>
    </Router>
  </Provider>, document.getElementById('prod-service')
);*/
/*
if (module.hot) module.hot.accept('./core/App', () => render(App));*/