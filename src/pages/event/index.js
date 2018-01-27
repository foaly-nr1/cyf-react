import React, { Component } from 'react';
import styled from 'react-emotion';
import Page from '../../components/page';
import InnerContainer from '../../components/inner-container';
import { fetchEvent } from '../../lib/events';
import type { CYFEvent } from '../../types';

const Topic = styled('p')`
  font-weight: 700;
`;

export const Event = ({
  city,
  intake,
  eventId,
  topic,
  location,
  // mentors,
  startDate,
  endDate,
}: CYFEvent) => (
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
    </InnerContainer>
  </Page>
);

type Props = {};

type State = {
  event: CYFEvent,
};

class EventContainer extends Component<Props, State> {
  state = {
    event: {},
  };

  componentDidMount() {
    const [eventId] = window.location.pathname.split('/').slice(-1);
    fetchEvent(eventId).then(event => {
      this.setState({ event: event.data });
    });
  }

  render() {
    return <Event {...this.state.event} />;
  }
}

export default EventContainer;
