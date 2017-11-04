import React from 'react';
import { shallow } from 'enzyme';

import Footer from './';

describe('Footer Component', () => {
  it('renders correctly', () => {
    expect(shallow(<Footer />)).toMatchSnapshot();
  });
});
