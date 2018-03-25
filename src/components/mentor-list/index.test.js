import React from 'react';
import { shallow } from 'enzyme';

import MentorList from './';

describe('MentorList Component', () => {
  it('renders correctly', () => {
    expect(shallow(<MentorList />)).toMatchSnapshot();
  });
});
