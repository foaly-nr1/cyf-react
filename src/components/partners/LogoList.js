import React from 'react';
import PropTypes from 'prop-types';
import LogoListItem from './LogoListItem';

const renderLogoListItem = (partner) => (
  <LogoListItem
    key={partner.id}
    href={partner.url}
    src={partner.logo}
    alt={partner.name}
    grid='col-sm-4 col-md-4' />
)

const LogoList = ({ partners }) => (
  <div className="logo-list">
    {partners
      .filter(partner => !partner.featured)
      .map(partner => renderLogoListItem(partner))}
  </div>
);

LogoList.propTypes = {
  partners: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    featured: PropTypes.bool.isRequired,
  })).isRequired,
};

export default LogoList;
