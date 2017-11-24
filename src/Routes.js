import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Route, Router } from 'react-router-dom';
import history from './lib/history';

import { Home, Event, ApplySuccess, Apply, Volunteers, Students, CreateEvent, Events, Partners, About, MeetTheTeam, Donate } from './pages';

import Navigation from './components/navigation';
import Footer from './components/footer';
import Callback from './components/callback';
import { Auth } from './lib/auth';

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
};

const Routes = () => (
  <Router history={history} component={Home}>
    <div>
      <Navigation auth={auth} />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/events" component={Events} />
      <Route exact path="/events/:event_id" component={Event} />
      <Route exact path="/event/create" component={CreateEvent} />
      <Route exact path="/students" component={Students} />
      <Route exact path="/volunteers" component={Volunteers} />
      <Route exact path="/apply/:formType" component={Apply} />
      <Route exact path="/apply/success/:formType" component={ApplySuccess} />
      <Route exact path="/partners" component={Partners} />
      <Route exact path="/meet-the-team" component={MeetTheTeam} />
      <Route exact path="/donate" component={Donate} />
      <Route
        path="/callback"
        render={(props) => {
          handleAuthentication(props);
          return <Callback {...props} />;
        }}
      />
      <Footer />
    </div>
  </Router>
);

export default Routes;
