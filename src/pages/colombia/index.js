// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'react-emotion';

import TopSection from '../../components/top-section';
import colombiaFlyer from '../../assets/images/cyf-colombia-flyer.jpg';
import colombiaLogo from '../../assets/images/cyf-colombia-logo.png';

const studentLink = 'https://airtable.com/shr8vflbZQkh5hAe4';
const volunteerLink = 'https://airtable.com/shroNkIefDJfFksXa';

const ActionLink = styled('h2')`
  color: #6067af;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const ColombiaText = (
  <div>
    <ActionLink>
      <a href={studentLink}>Quiero ser estudiante</a>
    </ActionLink>

    <ActionLink>
      <a href={volunteerLink}>Quiero ser voluntario</a>
    </ActionLink>
  </div>
);

const Colombia = () => (
  <main>
    <TopSection title="Code Your Future Colombia" content={ColombiaText} />
  </main>
);

export default Colombia;
