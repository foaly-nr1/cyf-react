import React from 'react';
import { shallow } from 'enzyme';
import WhatWeTeach from './';

describe('WhatWeTeach', () => {
  it('renders the component', () => {
    expect(shallow(<WhatWeTeach />)).toMatchSnapshot();
  });
});
