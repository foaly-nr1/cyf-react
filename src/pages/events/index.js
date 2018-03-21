// @flow
import React, { Component } from 'react';
import styled from 'react-emotion';
import moment from 'moment';
import InnerContainer from '../../components/inner-container';
import SectionHeading from '../../components/section-heading';
import Spinner from '../../components/spinner';
import Page from '../../components/page';
import EventCard from '../../components/event-card';
import Content from '../../content/events';
import { fetchEvents, sortEventsByDate } from '../../lib/events';
import type { CYFEvent } from '../../types';

const DateEventContainer = styled('div')({
  paddingTop: '8px',
  '*': {
    margin: '0' /* Overide all global css horribleness from legacy.css */,
  },
});

const Heading = styled('h3')({
  textTransform: 'none',
  color: '#444444',
});

const DateHeading = styled('h4')({
  textAlign: 'left',
  paddingBottom: '12px',
  color: '#333333',
});

const CardContainer = styled('div')({
  paddingBottom: '16px',
});

type EventsProps = {
  dates: Array<any>,
};

const today = moment();

const futureEventsFilter = events =>
  events.filter(event => moment(event.date).isAfter(today));

const EventGroup = ({ eventGroup }: any) => {
  const { date, events } = eventGroup;
  if (!events) {
    return null;
  }

  const futureEvents = futureEventsFilter(events);
  if (futureEvents.length === 0) {
    return null;
  }

  return (
    <DateEventContainer key={date}>
      <DateHeading>{moment(date).format('LL')}</DateHeading>
      {futureEvents.map(event => (
        <CardContainer key={event.eventId}>
          <EventCard {...event} />
        </CardContainer>
      ))}
    </DateEventContainer>
  );
};

const Events = ({ dates }: EventsProps) => (
  <Page>
    <InnerContainer>
      <SectionHeading>
        <Heading>{Content.Events.Heading}</Heading>
      </SectionHeading>
      {dates &&
        dates.map(eventGroup => (
          <EventGroup key={eventGroup.date} eventGroup={eventGroup} />
        ))}
    </InnerContainer>
  </Page>
);

type Props = {};

type State = {
  events: Array<CYFEvent>,
  loading: boolean,
};

class EventsContainer extends Component<Props, State> {
  state = {
    events: [],
    loading: true,
  };

  componentDidMount() {
    fetchEvents().then(events => {
      this.setState({
        events: sortEventsByDate(events.data),
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
      <Events dates={this.state.events} />
    );
  }
}

export default EventsContainer;
