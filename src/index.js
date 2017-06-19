import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'


import Home from './containers/Home'
import { Volunteers } from './pages/Volunteers'
import { Students } from './pages/Students'
import { Events } from './pages/Events'
import { Partners } from './pages/Partners'
import { Apply } from './pages/Apply'

import { Navigation } from './components/Navigation'
import { Footer } from './components/Footer'

import registerServiceWorker from './registerServiceWorker'
// import './index.css'

ReactDOM.render(
  <Router>
    <div>
      <Navigation />
      <Route exact path="/" component={Home}/>
      <Route path="/events" component={Events}/>
      <Route path="/students" component={Students}/>
      <Route path="/volunteers" component={Volunteers}/>
      <Route path="/apply/:form_type" component={Apply}/>
      <Route path="/partners" component={Partners}/>
      <Footer />
    </div>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();