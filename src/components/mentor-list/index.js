import React from 'react';
import styled from 'react-emotion';
import { Link } from 'react-router-dom';
import MentorCard from '../mentor-card';
import mentors from '../../content/mentors';
import mediaQueries from '../../stylesheets/variables/media-queries';

const Mentors = styled('section')`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Mentor = styled(MentorCard)`
  flex: 0 0 48%;

  @media (min-width: ${mediaQueries.sm}) {
    flex-basis: 30%;
  }
`;

const CallToActionContainer = styled('div')`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex: 0 0 48%;

  @media (min-width: ${mediaQueries.sm}) {
    flex-basis: 30%;
  }
`;

const CallToAction = styled(Link)`
  white-space: normal;
  font-size: 1.2em;
  line-height: 1.3;
  margin-top: 33%;
`;

const MentorList = () => (
  <Mentors id="mentors">
    {mentors.map(mentor => <Mentor key={mentor.id} {...mentor} />)}

    <CallToActionContainer>
      <CallToAction className="big-link-3 btn" to="/volunteers">
        Become a volunteer
      </CallToAction>
    </CallToActionContainer>
  </Mentors>
);

export default MentorList;
