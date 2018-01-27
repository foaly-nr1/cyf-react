import React from 'react';
import { shallow } from 'enzyme';

import Events from './';

describe('Events Component', () => {
  it('renders', () => {
    expect(shallow(<Events />)).toMatchSnapshot();
  });
});
