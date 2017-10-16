import React from 'react';
import styled from 'styled-components';
import LogoList from './LogoList'

// const Feature = styled.div`
//   padding-bottom: 50px;
// `;

// const renderFeaturedLogoList = (partners) => {
//   const featuredLogoList = partners
//     .filter(partner => partner.featured)
//     .map(partner => (
//       <Feature key={partner.id} className="row">
//         <div className="col-sm-10 col-sm-offset-1 ticketmaster-wrap">
//           <a href={partner.url} target="_blank" rel="noopener noreferrer">
//             <img className="img-fluid" src={partner.logo} alt={partner.name}/>
//           </a>
//         </div>
//       </Feature>
//     ));
//
//   return featuredLogoList;
// };

const renderLogoListSections = (partners) => {
  return Object.keys(partners).map(section => {
    const className = `container partners__${section}`

    return (
      <div key={section} className={className}>
        <LogoList partners={partners[section]}/>
      </div>
    )
  })
}

export const PartnerLogos = ({ partners }) => (
  <section className="section-container section-container-gray">
    <div className="container partners__general">
      {/*{renderFeaturedLogoList(partners)}*/}
      {renderLogoListSections(partners)}
    </div>
  </section>
);
