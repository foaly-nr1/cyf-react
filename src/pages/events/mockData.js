import { Event } from '../../types';

export default ([
  {
    city: 'London',
    description: 'First bit of javascript',
    endDate: '1515851599504',
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
  },
  {
    city: 'London',
    description: 'Moving onto arrays and objects',
    endDate: '1515891599504',
    intake: 'London Class 3',
    links: [
      {
        'course materials':
          'https://codeyourfuture.github.io/syllabus-master/js-core/week-05/lesson.html',
      },
    ],
    location: 'Ticketmaster',
    mentors: [
      { name: 'Matt', avatar: 'www.something.com' },
      { name: 'Jun', avatar: 'www.somthing.com' },
    ],
    moduleLeaders: [{ name: 'Kash', avatar: 'something' }],
    startDate: '1515881599504',
    topic: 'Week 5 - Arrays and Objects',
  },
]: Array<Event>);
