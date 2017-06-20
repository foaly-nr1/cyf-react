import React from 'react'

import { Link } from 'react-router-dom'

import { Nav, Navbar } from "react-bootstrap"

import cyflogo from '../img/cyf_brand.png';
import fblogo from '../img/ico/fb_logo.svg';
import twitterlogo from '../img/ico/twitter-silhouette.svg';
import linkedinlogo from '../img/ico/linkedin-logo.svg';
import emaillogo from '../img/ico/email-icon.svg';

const logoStyle = {
  width: '20px',
  height: '21px'
}

const cyflogoStyle = {
  width: '158px',
  height: '50px'
}

export const Navigation = () => (
  <Navbar collapseOnSelect>
    <Navbar.Header>
      <Link to="/">
        <img src={cyflogo} style={cyflogoStyle} alt="logo" />
      </Link>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
    <Nav pullRight>
      {/*<li>
        <Link to="/events">Events</Link>
      </li>*/}
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/students">Students</Link>
      </li>
      <li>
        <Link to="/volunteers">Volunteers</Link>
      </li>
      <li>
        <Link to="/partners">Partners</Link>
      </li>
      <li>
        <Link to="/meet-the-team">Meet the team</Link>
      </li>
      <li className="nav-icon">
        <Link to="https://www.facebook.com/codeyourfuture.co" target="_blank">
          <img src={fblogo} style={logoStyle} alt="facebook"/>
        </Link>
      </li>
      <li className="nav-icon">
        <Link to="https://twitter.com/CodeYourFuture_" target="_blank">
          <img src={twitterlogo} style={logoStyle} alt="twitter"/>
        </Link>
      </li>
      <li className="nav-icon">
        <Link to="https://www.linkedin.com/company/codeyourfuture" target="_blank">
          <img src={linkedinlogo} style={logoStyle} alt="linkedin"/>
        </Link>
      </li>
      <li className="nav-icon">
        <Link to="mailto:contact@codeyourfuture.co" title="Contact us">
          <img src={emaillogo} style={logoStyle} alt="email"/>
        </Link>
      </li>
    </Nav>
    </Navbar.Collapse>
  </Navbar>
);
