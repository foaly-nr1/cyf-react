import React from 'react'
import PropTypes from 'prop-types'

const LogoListItem = ({ href, src, alt }) => (
  <div className="logo-list-item col-sm-4 col-md-4">
    <a href={href} target="_blank" rel="noopener noreferrer">
      <img src={src} alt={alt} />
    </a>
  </div>
)

LogoListItem.propTypes = {
  href: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default LogoListItem
