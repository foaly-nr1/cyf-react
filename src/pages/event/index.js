import React, { Component } from 'react';
import Page from '../../components/page';
import InnerContainer from '../../components/inner-container';
import EventDetail from '../../components/event-detail';
import { fetchEvent } from '../../lib/events';
import type { CYFEvent } from '../../types';

export const Event = (event: CYFEvent) => (
  <Page>
    <InnerContainer>
      <EventDetail {...event} />
    </InnerContainer>
  </Page>
);

type Props = {};

type State = {
  event: CYFEvent,
};

class EventContainer extends Component<Props, State> {
  state = {
    event: {
      startDate: '1515951599504',
    },
  };

  componentDidMount() {
    const [eventId] = window.location.pathname.split('/').slice(-1);
    fetchEvent(eventId).then(event => {
      console.log(this.state.event.startDate);
      this.setState({ event: event.data });
    });
  }

  render() {
    return <Event {...this.state.event} />;
  }
}

export default EventContainer;
