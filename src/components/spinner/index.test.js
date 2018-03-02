import React from 'react';
import { shallow } from 'enzyme';

import Spinner from './';

describe('Spinner Component', () => {
  it('renders correctly', () => {
    expect(shallow(<Spinner />)).toMatchSnapshot();
  });
});
