import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

// import App from './App';
import Navigation from './components/Navigation';
import Home from './containers/Home'
import {
  About,
  Volunteers,
  Students,
  Partners
} from './Pages'

// import Routes from './routes';

import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <Router>
    <div>
      <Navigation />
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/students" component={Students}/>
      <Route path="/volunteers" component={Volunteers}/>
      <Route path="/partners" component={Partners}/>
    </div>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();