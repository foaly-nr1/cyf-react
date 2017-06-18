import React from 'react'
const SupportSection = () => (
  <div className="section-container">
    <div className="container">
      <div className="row">
        <div className="col-sm-6 col-md-6">
          <h2>Want to Contribute?</h2>
        </div>
        <div className="col-sm-6 col-md-6 block-box help-section">
          <h3 className="text-left">We are looking for</h3>
          <br />
          <ul className="text-left">
            <li><span className="list-icon"><img src="img/ico/conference-hall-black.svg" /></span>Space</li>
            <li><span className="list-icon"><img src="img/ico/code.svg" /></span>Mentors (Javascript)</li>
            <li><span className="list-icon"><img src="img/ico/laptop.svg" /></span>Used Laptops</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);