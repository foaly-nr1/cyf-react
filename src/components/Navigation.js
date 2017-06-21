import React from 'react'

import { Link } from 'react-router-dom'

import { Nav, Navbar, NavItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

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
      {/*<NavItem>
        <Link to="/events">Events</Link>
      </li>*/}
      <LinkContainer to="/about">
        <NavItem eventKey={1}>About</NavItem>
      </LinkContainer>
      <LinkContainer to="/students">
      <NavItem>Students</NavItem>
    </LinkContainer>
     <LinkContainer to="/volunteers">
      <NavItem>Volunteers</NavItem>
    </LinkContainer>
     <LinkContainer to="/partners">
      <NavItem>Partners</NavItem>
    </LinkContainer>
     <LinkContainer to="/meet-the-team">
      <NavItem>Meet the team</NavItem>
    </LinkContainer>
     <LinkContainer to="https://www.facebook.com/codeyourfuture.co" target="_blank">
     <NavItem className="nav-icon">
          <img src={fblogo} style={logoStyle} alt="facebook"/>
     </NavItem>
    </LinkContainer>
     <LinkContainer to="https://twitter.com/CodeYourFuture_" target="_blank">
     <NavItem className="nav-icon">
          <img src={twitterlogo} style={logoStyle} alt="twitter"/>
     </NavItem>
    </LinkContainer>
     <LinkContainer to="https://www.linkedin.com/company/codeyourfuture" target="_blank">
     <NavItem className="nav-icon">
          <img src={linkedinlogo} style={logoStyle} alt="linkedin"/>
     </NavItem>
    </LinkContainer>
     <LinkContainer to="mailto:contact@codeyourfuture.co" title="Contact us">
     <NavItem className="nav-icon">
          <img src={emaillogo} style={logoStyle} alt="email"/>
     </NavItem>
    </LinkContainer>
    </Nav>
    </Navbar.Collapse>
  </Navbar>
);
