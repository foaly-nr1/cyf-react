import React from 'react'

const LogoListItem = ({ href, src, alt }) => (
  <div className="logo-list-item col-sm-4 col-md-4">
    <a href={href} target="_blank" rel="noopener noreferrer">
      <img src={src} alt={alt} />
    </a>
  </div>
)

export default LogoListItem
