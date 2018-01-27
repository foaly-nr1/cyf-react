import React from 'react';
import { css } from 'emotion';
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
    color: '#33333',
    fontSize: '18px',
    lineHeight: '1.45',
    margin: 0,
    paddingBottom: '16px',
    textTransform: 'none',
  },
  p: {
    fontSize: '18px',
  },
});

const EventDetail = ({
  city,
  description,
  intake,
  topic,
  location,
  mentors,
  startDate,
}: // endDate,
CYFEvent) => {
  const date =
    startDate &&
    Date(startDate)
      .split(' ')
      .slice(0, 5)
      .join(' ');
  console.log(date);
  return (
    <div className={container}>
      <h1>{topic}</h1>
      <h2>{intake}</h2>
      <p>{date}</p>
      <p>
        <span>{city}</span>
        <span>, </span>
        <span>{location}</span>
      </p>
      <p> Add the address here too </p>
      <p>
        <span>Attendees </span>
        <span>({mentors && mentors.length})</span>
      </p>
      {mentors &&
        mentors.map(mentor => (
          <div>
            <ProfileSnippet {...mentor} />
          </div>
        ))}
      <p>{description}</p>
      <div>
        <button>Attend this event</button>
      </div>
      <div>
        <a href="/events">Back to event listing</a>
      </div>
    </div>
  );
};

export default EventDetail;
