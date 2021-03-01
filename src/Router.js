import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './components/App';
import Quote from './components/Quote';
import Home from './components/Home';

const Router = () => (

  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/quote" component={Quote} />
      <Route path="/app" component={App} />
    </Switch>
  </BrowserRouter>
);

export default Router;
