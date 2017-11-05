import React from 'react';
import { shallow } from 'enzyme';

import Navigation from './';

describe('Navigation Component', () => {
  it('renders', () => {
    expect(shallow(<Navigation />)).toMatchSnapshot();
  });
});
