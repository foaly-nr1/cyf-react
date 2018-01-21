// @flow
import React, { Component } from 'react';
import styled from 'react-emotion';
import InnerContainer from '../../components/inner-container';
import SectionHeading from '../../components/section-heading';
import EventCard from '../../components/event-card';
import Content from '../../content/events';
// import eventsArray from './mockData';
import fetchEvents from '../../lib/events';
import type { CYFEvent } from '../../types';

const Page = styled('div')`
  background-color: #f8f8f8;
`;

const CardContainer = styled('div')`
  margin-bottom: 8px;
`;

const EventsHeading = styled(SectionHeading)`
  text-transform: none; !important
`;

type Props = {};

type State = {
  events: Array<CYFEvent>,
};

class EventsContainer extends Component<Props, State> {
  state = {
    events: [],
  };

  componentDidMount() {
    fetchEvents().then(events => {
      this.setState({ events });
      console.log(this.state);
    });
  }

  render() {
    return <Events events={this.state.events} />;
  }
}

type EventsProps = {
  events: Array<CYFEvent>,
};
const Events = ({ events }: EventsProps) => (
  <Page>
    <InnerContainer>
      <EventsHeading>
        <h3>{Content.Events.Heading}</h3>
      </EventsHeading>
      {events.length > 0 &&
        events.map(event => (
          <CardContainer>
            <EventCard {...event} />
          </CardContainer>
        ))}
    </InnerContainer>
  </Page>
);

export default EventsContainer;
