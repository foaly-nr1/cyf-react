import React from 'react';
import { shallow } from 'enzyme';

import MentorCard from './';

describe('MentorCard Component', () => {
  it('renders correctly', () => {
    const mentor = {
      firstName: 'Germán',
      lastName: 'Bencci',
      photo: 'german.jpg',
      title: 'Organiser'
    };
    expect(shallow(<MentorCard {...mentor} />)).toMatchSnapshot();
  });
});
