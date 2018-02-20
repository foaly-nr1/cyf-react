import React from 'react';
import { shallow } from 'enzyme';

import EventCard from './';

describe('EventCard Component', () => {
  it('renders correctly', () => {
    const mockEvent = {
      city: 'London',
      description: 'First bit of javascript',
      endDate: '1515851599504',
      eventId: '1',
      intake: 'London Class 3',
      links: [
        {
          'course materials':
            'https://codeyourfuture.github.io/syllabus-master/js-core/week-04/lesson.html',
        },
      ],
      location: 'Ticketmaster',
      mentors: [
        { name: 'Matt', avatar: 'www.something.com' },
        { name: 'Jun', avatar: 'www.somthing.com' },
        { name: 'Felix', avatar: 'www.somthing.com' },
      ],
      moduleLeaders: [{ name: 'Kash', avatar: 'something' }],
      startDate: '1515851599504',
      topic: 'Week 4 - Hello Javascript',
    };

    expect(shallow(<EventCard {...mockEvent} />)).toMatchSnapshot();
  });
});
