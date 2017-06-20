import React from 'react';
import { Link } from 'react-router-dom'

import { TopSection } from '../components/TopSection';
import { MentorCard } from '../components/MentorCard';

import mentors from '../content/mentors';

const Intro = (
  <section id="intro">
    <p>
      Last year a small group of professional developers got together with a group of asylum seekers and refugees to start the first class of CodeYourFuture. Today we are small community creating an environment that is open, playful and tolerant, ensuring a lasting learning experience that influences the lives of our students.
    </p>

    <div className="section-bottom-link">
      <Link className="big-link-3 btn" to="/volunteers">Become a volunteer</Link>
    </div>
  </section>
);

const Mentors = () => (
  <section id="mentors" className="col-sm-8 col-sm-offset-2 block-2-box row">
    {mentors.map(mentor => <MentorCard {...mentor} />)}
  </section>
);

export const MeetTheTeam = () => (
  <main className="container">
    <TopSection title="Meet the team" content={Intro} />

    <div className="row">
      <Mentors />
    </div>
  </main>
);

