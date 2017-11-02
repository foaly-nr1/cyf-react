import React from 'react';
import { shallow } from 'enzyme';

import Banner from './';

describe('Banner Component', () => {
  it('renders', () => {
    expect(shallow(<Banner />)).toMatchSnapshot();
  });
});
