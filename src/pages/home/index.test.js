import React from 'react';
import ReactDOM from 'react-dom';
import Home from './';

jest.mock('react-router-dom', () => ({
  Link: () => <div />,
}));

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Home />, div);
});
