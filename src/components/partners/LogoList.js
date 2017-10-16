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

const LogoList = ({ partners }) => (
  <div className="logo-list">
    {partners.map(partner => {
      const grid = partner.featured
        ? 'col-sm-10 col-sm-offset-1 ticketmaster-wrap'
        : 'col-sm-4 col-md-4';

      return renderLogoListItem(partner, grid);
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
