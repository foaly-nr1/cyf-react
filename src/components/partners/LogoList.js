import React from 'react';
import PropTypes from 'prop-types';
import LogoListItem from './LogoListItem';

const renderLogoListItem = (partner, grid) => (
  <LogoListItem
    key={partner.id}
    href={partner.url}
    src={partner.logo}
    alt={partner.name}
    grid={grid} />
);

const LogoList = ({partners}) => (
  <div className="logo-list">
    {partners.map(partner => {
      if (partner.featured) {
        return renderLogoListItem(partner, 'col-sm-10 col-sm-offset-1 ticketmaster-wrap');
      } else {
        return renderLogoListItem(partner, 'col-sm-4 col-md-4');
      }
    })}
  </div>
);

LogoList.propTypes = {
  partners: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    featured: PropTypes.bool.isRequired
  })).isRequired
};

export default LogoList;
