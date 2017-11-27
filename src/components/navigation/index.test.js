import React from 'react';
import { shallow } from 'enzyme';

import Navigation from './';

describe('Navigation Component', () => {
  it('renders', () => {
    const mockAuth = {
      isAuthenticated: jest.fn(() => true),
    };

    expect(shallow(<Navigation auth={mockAuth} />)).toMatchSnapshot();
  });
});
