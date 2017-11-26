import React from 'react';
import { Link } from 'react-router-dom';

import TopSection from '../../components/top-section';
import PartnerLogos from '../../components/partners/PartnerLogos';
import Support from '../../components/support';
import partners from '../../content/partners';

const PartnersText = (
  <div>
    <p>
      The tech industry is facing a big challenge to find developers to fill the ever increasing
      number of vacancies. At the same time, asylum seekers and refugees lack the necessary
      opportunities to update their skills and integrate better in society.
    </p>
    <p>Together we’ll help to solve both of these issues.</p>

    <div className="section-bottom-link">
      <Link
        className="big-link-3 btn"
        to="mailto:contact@codeyourfuture.io?subject=Interested in partnership"
      >
        Get in Touch
      </Link>
    </div>
  </div>
);

const Partners = () => (
  <div>
    <TopSection title="Partner with us" content={PartnersText} />
    <PartnerLogos partners={partners} />
    <Support />
  </div>
);

export default Partners;
