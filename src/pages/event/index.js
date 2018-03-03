import React, { Component } from 'react';
import Page from '../../components/page';
import InnerContainer from '../../components/inner-container';
import EventDetail from '../../components/event-detail';
import Spinner from '../../components/spinner';
import { fetchEvent } from '../../lib/events';
import type { CYFEvent } from '../../types';

export const EventPage = (event: CYFEvent) => (
  <Page>
    <InnerContainer>
      <EventDetail {...event} />
    </InnerContainer>
  </Page>
);

type Props = {};

type State = {
  event: CYFEvent,
  loading: true,
};

class EventContainer extends Component<Props, State> {
  state = {
    event: {
      startDate: '1515951599504',
    },
    loading: true,
  };

  componentDidMount() {
    const [eventId] = window.location.pathname.split('/').slice(-1);
    fetchEvent(eventId).then(event => {
      this.setState({
        event: event.data,
        loading: false,
      });
    });
  }

  render() {
    return this.state.loading ? (
      <Page>
        <Spinner name="circle" />
      </Page>
    ) : (
      <EventPage {...this.state.event} />
    );
  }
}

export default EventContainer;
