// @flow
import React, { Component } from 'react';
import styled from 'react-emotion';
import v4 from 'uuid';
import InnerContainer from '../../components/inner-container';
import SectionHeading from '../../components/section-heading';
import Page from '../../components/page';
import EventCard from '../../components/event-card';
import Content from '../../content/events';
import { fetchEvents } from '../../lib/events';
import type { CYFEvent } from '../../types';

const CardContainer = styled('div')`
  margin-bottom: 8px;
`;

const EventsHeading = styled(SectionHeading)`
  text-transform: none; !important
`;

type EventsProps = {
  events: Array<CYFEvent>,
};

const Events = ({ events }: EventsProps) => (
  <Page>
    <InnerContainer>
      <EventsHeading>
        <h3>{Content.Events.Heading}</h3>
      </EventsHeading>
      {events &&
        events.length > 0 &&
        events.map(event => (
          <CardContainer key={v4()}>
            <EventCard {...event} />
          </CardContainer>
        ))}
    </InnerContainer>
  </Page>
);

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
      this.setState({ events: events.data });
    });
  }

  render() {
    return <Events events={this.state.events} />;
  }
}

export default EventsContainer;
