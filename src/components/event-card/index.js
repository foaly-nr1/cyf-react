// @flow
import React from 'react';
import styled from 'react-emotion';
import moment from 'moment';
import type { CYFEvent } from '../../types';

const Container = styled('div')({
  backgroundColor: 'white',
  boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.5)',
  maxWidth: '415px',
  padding: '12px',
  textAlign: 'left',
  h4: {
    color: '#333333',
    fontSize: '18px',
    paddingBottom: '12px',
  },
  'p,span': {
    color: '#666666',
    lineHeight: '20px',
  },
});

const Location = styled('div')({
  paddingBottom: '12px',
  span: {
    fontSize: '14px',
  },
});

const Topic = styled('p')({
  fontSize: '16px',
  fontWeight: '700',
});

// const Attendance = styled('span')({
//   float: 'right',
//   fontSize: '16px',
// });

const EventLink = styled('a')({
  fontSize: '16px',
  textDecoration: 'underline',
});

const EventCard = ({
  endTime,
  eventId,
  title,
  description,
  location,
  startTime,
  date,
}: CYFEvent) => (
  <Container>
    <Topic>{title}</Topic>
    <Location>
      <p>
        <span>{location}</span>
      </p>
      <p>
        <span>{moment(date).format('LL')}</span>
        <span> {startTime}</span>
        <span> - </span>
        <span>{endTime}</span>
      </p>
    </Location>
    <br />
    <p>{description}</p>
    <EventLink href={`/events/${eventId}`}>View event</EventLink>
    {/* <Attendance>
      <span>{mentors.length + moduleLeaders.length}</span>
      <span> attending</span>
    </Attendance> */}
  </Container>
);

export default EventCard;
