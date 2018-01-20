// @flow
import React from 'react';
import styled from 'react-emotion';
import { Event } from '../../types';

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
  intake,
  topic,
  city,
  location,
  mentors,
  startDate,
  endDate,
}: Event) => (
  <Container>
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
    </p>
    <EventLink href="">View event</EventLink>
    <Attendance>
      <span>{mentors.length}</span>
      <span> attending</span>
    </Attendance>
  </Container>
);

export default EventCard;
