import React from 'react';
import { shallow } from 'enzyme';

import Event from './';

describe('Event Component', () => {
  it('renders', () => {
    expect(shallow(<Event />)).toMatchSnapshot();
  });
});
