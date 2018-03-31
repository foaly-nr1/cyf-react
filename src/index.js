import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
import Routes from './Routes';

const stripe = document.createElement('script');
stripe.setAttribute('src', 'https://checkout.stripe.com/checkout.js');
stripe.setAttribute('async', true);
document.head.appendChild(stripe);

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root'),
);
registerServiceWorker();
