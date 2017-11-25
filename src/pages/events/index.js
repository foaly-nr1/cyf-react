import React from 'react';
// import { Link } from 'react-router-dom';
// import AuthLogin from '../../components/auth-login';
import TopSection from '../../components/top-section';
import EventSummary from '../../components/event-summary';

class Events extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [],
    };

    window.FirebaseInitialized
      .database()
      .ref('/events/')
      .once('value')
      .then((response) => {
        const events = [];

        const value = response.val();

        for (const key in value) {
          events.push({
            id: key,
            ...value[key],
          });
        }

        events.sort((a, b) => {
          if (a.date < b.date) {
            return -1;
          }

          if (a.date > b.date) {
            return 1;
          }

          return 0;
        });

        this.setState({ events });
      });
  }

  render() {
    return (
      <div>
        <div>
          <TopSection title="Events" content="Our current classes are done every Sunday in London and Edinburgh" />

          <div className="col-sm-4 col-sm-offset-4 section-description">{Array.reverse(this.state.events).map(event => <EventSummary key={event.id} {...event} />)}</div>
        </div>
      </div>
    );
  }
}

export default Events;
