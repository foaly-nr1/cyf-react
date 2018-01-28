// @flow
import React from 'react';
import styled from 'react-emotion';
import type { CYFEvent } from '../../types';

const Container = styled('div')`
  background-color: white;
  text-align: left;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.5);
  padding: 8px;
`;

const Topic = styled('p')`
  font-weight: 700;
`;

const Attendance = styled('span')`
  float: right;
`;

const EventLink = styled('a')`
  text-decoration: underline;
`;

const EventCard = ({
  city,
  intake,
  eventId,
  topic,
  location,
  mentors,
  moduleLeaders,
  startTime,
  endTime,
}: CYFEvent) => (
  <Container>
    <h4>{intake}</h4>
    <Topic>{topic}</Topic>
    <p>
      <span>{city}</span>
      <span>, </span>
      <span>{location}</span>
    </p>
    <p>
      <span>{startTime}</span>
      <span> -</span>
      <span>{endTime}</span>
    </p>
    <EventLink href={`/events/${eventId}`}>View event</EventLink>
    <Attendance>
      <span>{mentors.length + moduleLeaders.length}</span>
      <span> attending</span>
    </Attendance>
  </Container>
);

export default EventCard;
