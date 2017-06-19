import React from 'react';
import { TopSection } from '../components/TopSection'
import { Event } from '../components/Event'

const SomeEvents = [
  {
    id: '1',
    date: 'Monday, Jun 19',
    time: '12:00 PM',
    location: 'Ticketmaster (Angel, London)',
    title: 'Javascript Module 1',
    mentors: ['Kash'],
    sponsors: ['Ticketmaster']
  },
  {
    id: '2',
    date: 'Tuesday, Jun 20',
    time: '12:00 PM',
    location: 'Ticketmaster (Angel, London)',
    title: 'Javascript Module 1',
    mentors: [{name: 'Kash', url: ''}],
    sponsors: [{name: 'Ticketmaster', url: ''}]
  }
]

const renderEvents = () => {
    return (
      SomeEvents.map((event) => {
        return (
          <Event key={event.id} {...event} />
        )
      })
    )
  }

export const Events = () => {
  return (
    <div>
      <TopSection
        title="Events"
        content="Our current classes are done every Sunday in London and Edinburgh"/>
      <div className="col-sm-8 col-sm-offset-2 section-description">
        {renderEvents()}
      </div>
    </div>
  )
}