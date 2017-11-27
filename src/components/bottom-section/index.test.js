import React from 'react';
import { shallow } from 'enzyme';
import BottomSection from './';

describe('BottomSection', () => {
  it('renders correctly', () => {
    expect(
      shallow(
        <BottomSection link="/apply/volunteer" linkText="Become a Volunteer" />,
      ),
    ).toMatchSnapshot();
  });
});
