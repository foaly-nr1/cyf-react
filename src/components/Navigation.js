import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import {
  Nav,
  Navbar,
  NavItem
} from "react-bootstrap"

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

class Navigation extends Component {
  render() {
    return (
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <img src={cyflogo} style={cyflogoStyle} alt="logo" />
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
        <Nav pullRight>
          <NavItem eventKey={1}>
            <Link to="/students">Students</Link>
          </NavItem>
          <NavItem eventKey={2}>
            <Link to="/volunteers">Volunteers</Link>
          </NavItem>
          <NavItem eventKey={3}>
            <Link to="/partners">Partners</Link>
          </NavItem>
          <NavItem eventKey={4} className="scroll">
            <Link to="index.html#about-us">About us</Link>
          </NavItem>
          <NavItem className="nav-icon" href="https://www.facebook.com/codeyourfuture.co" target="_blank">
            <img src={fblogo} style={logoStyle} alt="facebook"/>
          </NavItem>
          <NavItem className="nav-icon" href="https://twitter.com/CodeYourFuture_" target="_blank">
            <img src={twitterlogo} style={logoStyle} alt="twitter"/>
          </NavItem>
          <NavItem className="nav-icon" href="https://www.linkedin.com/company/codeyourfuture" target="_blank">
            <img src={linkedinlogo} style={logoStyle} alt="linkedin"/>
          </NavItem>
            <NavItem className="nav-icon" href="mailto:contact@codeyourfuture.co" title="Contact us">
              <img src={emaillogo} style={logoStyle} alt="email"/>
          </NavItem>
        </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;