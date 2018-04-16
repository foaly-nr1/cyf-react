// @flow
import React from 'react';
import LogoList from './LogoList';

const renderLogoListSections = partners =>
  Object.keys(partners).map(section => {
    const className = `container partners__${section}`;
    let sectionLabel = `< ${section} />`;
    switch (section) {
      case 'tech':
        sectionLabel = '< Tech Supporters />';
        break;
      case 'soft':
        sectionLabel = '< Soft skills />';
        break;
      default:
        break;
    }

    return (
      <div key={section} className={className}>
        <h2>{sectionLabel}</h2>
        <div className="divider-1">
          <span />
        </div>
        <LogoList partners={partners[section]} />
      </div>
    );
  });

type Props = {
  partners: Object,
};
const PartnerLogos = ({ partners }: Props) => (
  <section className="section-container section-container-gray">
    <div className="container partners">{renderLogoListSections(partners)}</div>
  </section>
);

export default PartnerLogos;
