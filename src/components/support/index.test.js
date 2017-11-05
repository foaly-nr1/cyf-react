import React from 'react';
import { shallow } from 'enzyme';

import Support from './';

describe('Support Component', () => {
  it('renders', () => {
    expect(shallow(<Support />)).toMatchSnapshot();
  });
});
