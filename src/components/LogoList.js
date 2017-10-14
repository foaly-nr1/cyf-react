import React from 'react';
import PropTypes from 'prop-types';
import LogoListItem from './LogoListItem';

const LogoList = ({ partners }) => (
  <div className="logo-list">
    {partners.map(partner => <LogoListItem
      key={partner.id}
      href={partner.url}
      src={partner.logo}
      alt={partner.name}/>
    )}
  </div>
);

LogoList.propTypes = {
  partners: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
  })).isRequired
};

export default LogoList;
