import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

const containerStyle = {
  borderBottom: '1px solid #ddd',
  paddingBottom: '10px',
  paddingLeft: 0,
};

type Event = {
  description: string,
  id: string,
  date: string,
  title: string,
  location: string,
};
const EventSummary = ({ description, id, date, title, location }: Event) => (
  <ul className="no-bullet" style={containerStyle}>
    <div className="row grouped_events">
      <div className="event">
        <h4 className="small-9 medium-10 columns">
          <div className="title">
            <Link to={`/events/${id}`}>{title}</Link>
            &nbsp;at&nbsp;
            <Link to={`/events/${id}`}>{location}</Link>
          </div>
        </h4>

        <div className="small-9 medium-10 columns">
          {moment(date).format('MMM Do, h:mm a')}
        </div>

        <div className="small-9 medium-10 columns">{description}</div>
      </div>
    </div>
  </ul>
);

export default EventSummary;
