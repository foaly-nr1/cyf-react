import React from 'react';
import { shallow } from 'enzyme';
import EventSummary from './';

describe('EventSummary', () => {
  it('renders correctly', () => {
    const event = {
      date: 1509883200000,
      description: 'Work on CYF tickets',
      id: 'EVENTID101',
      location: 'Red Badger',
      mentors: {
        xyz123: 'Matt',
        abc123: 'Kash',
      },
      sponsors: 'Red Badger',
      title: 'Hacknight',
    };
    expect(shallow(<EventSummary {...event} />)).toMatchSnapshot();
  });
});
