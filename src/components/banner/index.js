import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'react-emotion';
import teaching from '../../assets/images/1.jpg';

import '../../stylesheets/index.scss';

const Hero = styled('div')`
  position: relative;
`;
const BannerImage = styled('img')`
  width: 100%;
  object-fit: cover;
  height: 600px;
`;

const BannerText = styled('div')`
  margin: 0 auto;
  background-color: rgba(62, 100, 132, 0.42);
  padding: 10px;
  color: #fff;
  position: absolute;
  width: 100%;
  top: 20%;

  > h1 {
    color: #fff;
  }
`;

const trackStudents = () => {
  const { gtag } = window;
  gtag('event', 'submit', {
    event_category: 'student-lead',
    event_label: 'homepage',
  });
};

const ApplyStudentsHomePage = withRouter(({ history }) => (
  <a
    role="button"
    tabIndex={0}
    className="big-link-2 btn"
    onClick={() => {
      trackStudents();
      history.push('/students');
    }}
    onKeyPress={() => {
      trackStudents();
      history.push('/students');
    }}
  >
    Apply Now
  </a>
));

const ApplyVolunteers = withRouter(({ history }) => (
  <a
    role="button"
    tabIndex={-1}
    className="big-link-2 btn"
    onClick={() => history.push('/volunteers')}
    onKeyPress={() => history.push('/volunteers')}
  >
    Become a volunteer
  </a>
));

const Banner = () => (
  <Hero>
    <BannerImage src={teaching} alt="teaching=refugees-to-code" />
    <BannerText>
      <h1>Coding School for Refugees</h1>
      <p>Learn to code and find a job</p>
      <div className="page-title-bottom-link">
        <ApplyStudentsHomePage />
        <ApplyVolunteers />
      </div>
    </BannerText>
  </Hero>
);

export default Banner;
