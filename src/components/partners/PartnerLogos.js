import React from 'react';
import styled from 'styled-components';
import LogoList from './LogoList'

const renderLogoListSections = (partners) => {
  return Object.keys(partners).map(section => {
    const className = `container partners__${section}`

    return (
      <div key={section} className={className}>
        <LogoList partners={partners[section]}/>
      </div>
    );
  });
};

export const PartnerLogos = ({ partners }) => (
  <section className="section-container section-container-gray">
    <div className="container partners__general">
      {renderLogoListSections(partners)}
    </div>
  </section>
);
