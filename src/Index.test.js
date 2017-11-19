import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';

jest.mock('scroll-to-element', () => 'scroll-to-element');

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Routes />, div);
});
