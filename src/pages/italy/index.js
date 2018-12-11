// @flow
import React from 'react';

import TopSection from '../../components/top-section';
import italyRegistration from '../../assets/images/cyf-italy-registration.png';

const ItalyText = (
  <div>
    <img src={italyRegistration} alt="registration" />
  </div>
);

const Italy = () => (
  <main>
    <TopSection title="Code Your Future Italy" content={ItalyText} />
  </main>
);

export default Italy;
