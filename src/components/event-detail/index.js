import React from 'react';
import { css } from 'emotion';
import moment from 'moment';
import ProfileSnippet from '../../components/profile-snippet';
import type { CYFEvent } from '../../types';

const container = css({
  backgroundColor: '#f8f8f8',
  padding: '16px',
  textAlign: 'left',
  h1: {
    color: '#44444',
    fontSize: '32px',
    fontWeight: 'normal',
    lineHeight: '1.13',
    margin: 0,
    paddingBottom: '4px',
    textTransform: 'none',
  },
  h2: {
    color: '#444444',
    fontSize: '22px',
    lineHeight: '1.45',
    margin: 0,
    paddingBottom: '16px',
    textTransform: 'none',
  },
  p: {
    fontSize: '18px',
    margin: 0,
  },
});

const dateContainer = css({
  color: '#333333',
});

const addressContainer = css({
  color: '#777777',
  paddingBottom: '32px',
});

const attendeeContainer = css({
  h3: {
    fontWeight: '500',
    color: '#333333',
    fontSize: '18px',
    margin: 0,
    paddingBottom: '4px',
  },
});

const EventDetail = ({
  city,
  date,
  description,
  intake,
  topic,
  location,
  mentors,
  moduleLeaders,
  startTime,
}: // endDate,
CYFEvent) => (
  <div className={container}>
    <h1>{topic}</h1>
    <h2>{intake}</h2>
    <p className={dateContainer}>
      <span>{moment(date).format('dddd, Do MMMM')}</span>
      <span>, </span>
      <span>{startTime}</span>
    </p>
    <div className={addressContainer}>
      <p>
        <span>{city}</span>
        <span>, </span>
        <span>{location}</span>
      </p>
      <p> Add the address here too </p>
    </div>
    <section className={attendeeContainer}>
      <h3>
        <span>Attendees </span>
        <span>({mentors && mentors.length + moduleLeaders.length})</span>
      </h3>
      {moduleLeaders &&
        moduleLeaders.map(mentor => (
          <div>
            <ProfileSnippet
              avatar={mentor.avatar}
              name={mentor.name}
              cyfRole="Module leader"
            />
          </div>
        ))}
      {mentors &&
        mentors.map(mentor => (
          <div>
            <ProfileSnippet
              avatar={mentor.avatar}
              name={mentor.name}
              cyfRole="Mentor"
            />
          </div>
        ))}
    </section>
    <p>{description}</p>
    <div>
      <button>Attend this event</button>
    </div>
    <div>
      <a href="/events">Back to event listing</a>
    </div>
  </div>
);

export default EventDetail;
