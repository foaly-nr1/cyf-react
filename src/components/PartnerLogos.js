import React from 'react';
import styled from 'styled-components';
import partners from '../content/partners';

const Feature = styled.div`
  padding-bottom: 50px;
`;

const LogoCard = ({ href, src, alt }) => (
  <div className="col-sm-4 col-md-4 col-sm-offset-2 col-md-offset-2">
    <a href={href} target="_blank" rel="noopener noreferrer">
      <img src={src} alt={alt} />
    </a>
  </div>
)

export const PartnerLogos = () => (
  <section className="section-container section-container-gray">
    <div className="container">
      <Feature className="row">
        <div className="col-sm-10 col-sm-offset-1 ticketmaster-wrap">
          <a href={partners.ticketmaster.url} target="_blank" rel="noopener noreferrer">
            <img className="img-fluid" src={partners.ticketmaster.logo} alt={partners.ticketmaster.name} />
          </a>
        </div>
      </Feature>

      <div className="row">
        <LogoCard href={partners.cititec.url} src={partners.cititec.logo} alt={partners.cititec.name}/>

        <div className="col-sm-4 col-md-4">
          <a href={partners.pipedrive.url} target="_blank" rel="noopener noreferrer">
            <img width="240px" height="52.6px" src={partners.pipedrive.logo} alt={partners.pipedrive.name} />
          </a>
        </div>

        <div className="col-sm-4 col-md-4 col-sm-offset-2 col-md-offset-2">
          <a href={partners.github.url} target="_blank" rel="noopener noreferrer">
            <img width="200" height="auto" src={partners.github.logo} alt={partners.github.name} />
          </a>
        </div>

        <div className="col-sm-4 col-md-4">
          <a href={partners.geckoboard.url} target="_blank" rel="noopener noreferrer">
            <img src={partners.geckoboard.logo} alt={partners.geckoboard.name} />
          </a>
        </div>
      </div>
    </div>
  </section>
);
