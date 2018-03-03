// @flow
import React, { Component } from 'react';
import styled from 'react-emotion';
import v4 from 'uuid';
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

const today = moment()
  .toISOString()
  .slice(0, 10)
  .replace(/-/g, '');

const futureEventsFilter = events =>
  events.filter(event => event.date.replace(/-/g, '') >= today);

const Events = ({ dates }: EventsProps) => (
  <Page>
    <InnerContainer>
      <SectionHeading>
        <Heading>{Content.Events.Heading}</Heading>
      </SectionHeading>
      {dates &&
        dates.map(date => (
          <DateEventContainer key={v4()}>
            <DateHeading>
              {date.date.replace(/-/g, '') >= today &&
                moment(date.date).format('dddd Do MMMM')}
            </DateHeading>
            {date.events &&
              futureEventsFilter(date.events).map(event => (
                <CardContainer key={v4()}>
                  <EventCard {...event} key={v4()} />
                </CardContainer>
              ))}
          </DateEventContainer>
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
  static defaultProps = {
    fetchEventsFn: fetchEvents,
  };

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
