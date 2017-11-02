import React from 'react';
import { shallow } from 'enzyme';

import Video from './';

describe('Video Component', () => {
  it('renders', () => {
    expect(shallow(<Video />)).toMatchSnapshot();
  });
});
