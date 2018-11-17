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
    <div>
      <img
        src={colombiaFlyer}
        alt="Code Your Future Colombia"
        style={{ margin: '75px 0' }}
      />
    </div>

    <ActionLink>
      <a href={studentLink}>Quiero ser estudiante</a>
    </ActionLink>

    <ActionLink>
      <a href={volunteerLink}>Quiero ser voluntario</a>
    </ActionLink>

    <p>
      For all other inquiries please contact us at{' '}
      <Link to="mailto:colombia@codeyourfuture.io" title="Contact us">
        colombia@codeyourfuture.io
      </Link>
      <br />
      <br />
    </p>
  </div>
);

const Colombia = () => (
  <main>
    <TopSection title="Code Your Future Colombia" content={ColombiaText} />
    <img
      src={colombiaLogo}
      alt="Code Your Future Colombia"
      style={{ width: '200px' }}
    />
  </main>
);

export default Colombia;
