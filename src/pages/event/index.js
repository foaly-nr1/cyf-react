import React, { Component } from 'react';
import styled from 'react-emotion';
import Page from '../../components/page';
import InnerContainer from '../../components/inner-container';
import { fetchEvent } from '../../lib/events';
import type { CYFEvent } from '../../types';

const Attendance = styled('span')`
  float: right;
`;

const Topic = styled('p')`
  font-weight: 700;
`;

const Event = ({
  city,
  intake,
  eventId,
  topic,
  location,
  mentors,
  startDate,
  endDate,
}: CYFEvent) => {
  console.log(eventId);
  return (
    <Page>
      <InnerContainer>
        <h4>{intake}</h4>
        <Topic>{topic}</Topic>
        <p>
          <span>{city}</span>
          <span>, </span>
          <span>{location}</span>
        </p>
        <p>
          <span>{startDate}</span>
          <span> -</span>
          <span>{endDate}</span>
          <span>{eventId}</span>
        </p>
        <Attendance>
          {/* <span>{mentors.length}</span> */}
          <span> attending</span>
        </Attendance>
      </InnerContainer>
    </Page>
  );
};

type Props = {};

type State = {
  event: CYFEvent,
};

// const mockEvent = {
//   city: 'London',
//   description: 'First bit of javascript',
//   endDate: '1515851599504',
//   intake: 'London Class 3',
//   links: [
//     {
//       'course materials':
//         'https://codeyourfuture.github.io/syllabus-master/js-core/week-04/lesson.html',
//     },
//   ],
//   location: 'Ticketmaster',
//   mentors: [
//     { name: 'Matt', avatar: 'www.something.com' },
//     { name: 'Jun', avatar: 'www.somthing.com' },
//     { name: 'Felix', avatar: 'www.somthing.com' },
//   ],
//   moduleLeaders: [{ name: 'Kash', avatar: 'something' }],
//   startDate: '1515851599504',
//   topic: 'Week 4 - Hello Javascript',
// };

class EventContainer extends Component<Props, State> {
  state = {
    event: {},
    // event: mockEvent,
  };

  componentDidMount() {
    // this.setState({ event: mockEvent });
    fetchEvent().then(event => {
      this.setState({ event: event.data });
    });
  }

  render() {
    return <Event event={this.state.event} />;
  }
}

export default EventContainer;
