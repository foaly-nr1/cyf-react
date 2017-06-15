import React, { Component } from 'react';

import '../stylesheets/index.scss';
//TODO: change hrefs to react-bootstrap links
class Banner extends Component {
  render() {
    return(
      <div className="page-title">
        <div className="page-title-text">
          <h1>Coding School for Refugees</h1>
          <p>Learn to code and find a job</p>
        <div className="page-title-bottom-link">
          <a className="big-link-2 btn" href="students#info">Apply Now</a>
          <a className="big-link-2 btn" href="volunteers" target="_blank" rel="noopener noreferrer">
            Become a volunteer
          </a>
        </div>
      </div>
    </div>
    );
  }
}
export default Banner;