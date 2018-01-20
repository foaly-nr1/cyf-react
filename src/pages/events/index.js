// @flow
import React from 'react';
import styled from 'react-emotion';
import InnerContainer from '../../components/inner-container';
import SectionHeading from '../../components/section-heading';
import EventCard from '../../components/event-card';
import Content from '../../content/events';
import eventsArray from './mockData';

const Page = styled('div')`
  background-color: #f8f8f8;
`;

const CardContainer = styled('div')`
  margin-bottom: 8px;
`;

const EventsHeading = styled(SectionHeading)`
  text-transform: none; !important
`;

const Events = () => (
  <Page>
    <InnerContainer>
      <EventsHeading>
        <h3>{Content.Events.Heading}</h3>
      </EventsHeading>
      {eventsArray.map(event => (
        <CardContainer>
          <EventCard {...event} />
        </CardContainer>
      ))}
    </InnerContainer>
  </Page>
);

export default Events;
