import React, { Component } from 'react';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory'
import App from './App';

const history = createBrowserHistory()

class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Route path="/" component={App}>
          <Route path="students" component={App} />
          <Route path="volunteers" component={App} />
          <Route path="partners" component={App} />
          <Route path="aboutus" component={App} />
        </Route>
      </Router>
    );
  }
}

export default Routes;