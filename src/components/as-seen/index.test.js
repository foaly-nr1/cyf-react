import React from 'react';
import { shallow } from 'enzyme';
import AsSeen from './';

describe('AsSeen', () => {
  it('renders', () => {
    expect(shallow(<AsSeen />)).toMatchSnapshot();
  });
});
