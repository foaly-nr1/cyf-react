import React from 'react';
import PropTypes from 'prop-types';
import LogoListItem from './LogoListItem';

const renderLogoListItem = (partner, additionalClass) => (
  <LogoListItem
    key={partner.id}
    href={partner.url}
    src={partner.logo}
    alt={partner.name}
    additionalClass={additionalClass}
  />
);

const LogoList = ({ partners }) => (
  <div className="logo-list">
    {partners.map(partner => {
      const additionalClass = partner.featured ? 'col-xs-12 featured' : '';

      return renderLogoListItem(partner, additionalClass);
    })}
  </div>
);

LogoList.propTypes = {
  partners: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      logo: PropTypes.string.isRequired,
      featured: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};

export default LogoList;
