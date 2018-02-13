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
    color: '#444',
    fontSize: '32px',
    fontWeight: 'normal',
    lineHeight: '1.13',
    margin: 0,
    paddingBottom: '4px',
    textTransform: 'none',
  },
  h2: {
    color: '#444',
    fontSize: '22px',
    lineHeight: '1.45',
    margin: 0,
    paddingBottom: '16px',
    textTransform: 'none',
  },
});

const dateContainer = css({
  color: '#333',
  'span:last-child': {
    display: 'block',
  },
});

const addressContainer = css({
  color: '#777',
  marginBottom: '32px',
  lineHeight: '1.4',
  fontSize: '18px',
  fontWeight: '400',
});

const attendeeContainer = css({
  marginBottom: '36px',
  h3: {
    fontWeight: '500',
    color: '#333',
    lineHeight: '1.33',
    fontSize: '18px',
    margin: 0,
    marginBottom: '12px',
    textTransform: 'none',
  },
});

const eventDescription = css({
  marginBottom: '16px',
  fontSize: '16px',
  lineHeight: '1.5',
});

const attendButton = css({
  fontSize: '18px',
  fontWeight: '400',
  lineHeight: '1.33',
  color: '#2ba560',
  padding: '8px 16px',
  backgroundColor: 'white',
  border: '1px solid #2ba560',
  borderRadius: '8px',
  ':hover': {
    backgroundColor: '#207e49',
    color: '#fff',
  },
  ':active': {
    backgroundColor: '#2ba560',
    color: '#fff',
  },
});

const backToEventLink = css({
  lineHeight: '1.5',
  fontSize: '16px',
  fontWeight: '400',
  color: '#333',
  marginTop: '32px',
  display: 'block',
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
  endTime,
}: // endDate,
CYFEvent) => (
  <div className={container}>
    <h1>{topic}</h1>
    <h2>{intake}</h2>
    <p className={dateContainer}>
      <span>{moment(date).format('dddd, Do MMMM')}</span>
      <span>
        {startTime} - {endTime}
      </span>
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
    <p className={eventDescription}>{description}</p>
    <div>
      <button className={attendButton}>Attend this event</button>
    </div>
    <div>
      <a href="/events" className={backToEventLink}>
        Back to event listing
      </a>
    </div>
  </div>
);

export default EventDetail;
