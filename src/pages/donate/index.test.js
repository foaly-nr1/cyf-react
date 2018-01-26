import React from 'react';
import { shallow } from 'enzyme';

import Donate from './';

describe('Navigation Component', () => {
  it('renders', () => {
    expect(shallow(<Donate />)).toMatchSnapshot();
  });
});
