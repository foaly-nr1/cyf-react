import React from 'react';

export const Event = (event) => {

  const {
    id,
    time,
    date,
    title,
    location,
    mentors,
    sponsors
  } = event;

  return (
    <ul className="no-bullet">
      <div className="row grouped_events">
        <div className="medium-12 columns">
          <h4>{date}</h4>
        </div>
        <div className='event'>
          <div className='row'>
            <div className='small-3 medium-2 columns'>
              <div className='date'>
                <div className='time'>
                {time}
                </div>
              </div>
            <div className='text-center'>
              <label className='label info'>
                {location}
              </label>
            </div>
          </div>
        </div>
        <div className="small-9 medium-10 columns">
          <div className="title">
            <a href={`/events/${id}`}>{title}</a>
            &nbsp;at&nbsp;
            <a href="">{location}</a>
          </div>
          <div className="row">
            <div className="medium-6 columns">
              <div className="sponsors">
                {sponsors[0].name}
              </div>
            </div>
            <div className="medium-6 columns">
              <div className="mentors">
                {mentors[0].name}
              </div>
            </div>
          </div>
    </div>
    </div>
    </div>
  </ul>
  )
}