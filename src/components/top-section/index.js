import React from 'react';

type Props = {
  title: string,
  content: string,
};

const TopSection = ({ title, content }: Props) => (
  <div className="section-container top-section">
    <div className="container">
      <div className="row">
        <div className="col-sm-8 col-sm-offset-2 section-description">
          <h2>{title}</h2>
          <div className="divider-1">
            <span />
          </div>
          <div>{content || ''}</div>
        </div>
      </div>
    </div>
  </div>
);

export default TopSection;
