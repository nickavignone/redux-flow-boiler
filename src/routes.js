//@flow
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ListDisplay, ItemDisplay }  from "components";
import App from './core/App';

const routes = () => {
  return (
    <App>
      <Switch>
        <Route exact path="/" component={ListDisplay}/>
        <Route path="/item/:itemId" component={ItemDisplay}/>
        <Redirect to="/" />
      </Switch>
    </App>
  );
};

export default routes;