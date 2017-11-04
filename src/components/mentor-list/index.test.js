import React from 'react';
import { shallow } from 'enzyme';

import MentorList from './';

jest.mock('uuid', () => {
  return {
    v4: jest.fn(() => 1)
  };
});

describe('MentorList Component', () => {
  it('renders correctly', () => {
    expect(shallow(<MentorList />)).toMatchSnapshot();
  });
});
