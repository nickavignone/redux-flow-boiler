import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { App, ListDisplay, ItemDisplay }  from "components";


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