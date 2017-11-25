import React from 'react';
import PropTypes from 'prop-types';

const LogoListItem = ({
  href, src, alt, additionalClass,
}) => {
  const className = `logo-list-item ${additionalClass}`;

  return (
    <div className={className}>
      <a href={href} target="_blank" rel="noopener noreferrer">
        <img src={src} alt={alt} />
      </a>
    </div>
  );
};

LogoListItem.propTypes = {
  href: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  additionalClass: PropTypes.string.isRequired,
};

export default LogoListItem;
