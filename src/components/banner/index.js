import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'react-emotion';
import teaching from '../../assets/images/1.jpg';

import '../../stylesheets/index.scss';

const BannerImage = styled('img')`
  width: 100%;
  object-fit: cover;
  height: 600px;
`;

const BannerText = styled('div')`
  margin: 0 auto;
  background-color: rgba(62, 100, 132, 0.42);
  padding: 10px;
  color: #fff;
  position: absolute;
  width: 100%;
  top: 20%;

  > h1 {
    color: #fff;
  }
`;

const Banner = () => (
  <div className="page-title">
    <BannerImage src={teaching} alt="teaching=refugees-to-code" />
    <BannerText>
      <h1>Coding School for Refugees</h1>
      <p>Learn to code and find a job</p>
      <div className="page-title-bottom-link">
        <Link to="students" className="big-link-2 btn">
          Apply Now
        </Link>
        <Link
          className="big-link-2 btn"
          to="volunteers"
          target="_blank"
          rel="noopener noreferrer"
        >
          Become a volunteer
        </Link>
      </div>
    </BannerText>
  </div>
);

export default Banner;
