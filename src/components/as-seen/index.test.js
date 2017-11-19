import React from 'react';
import { shallow } from 'enzyme';
import AsSeen from './';

jest.mock('scroll-to-element', () => 'scroll-to-element');

describe('AsSeen', () => {
  it('renders', () => {
    expect(shallow(<AsSeen />)).toMatchSnapshot();
  });
});
