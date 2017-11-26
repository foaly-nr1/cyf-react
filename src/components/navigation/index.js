// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import setFeatures from 'feature-toggle';

import cyflogo from '../../img/cyf_brand.png';
import fblogo from '../../img/ico/fb_logo.svg';
import twitterlogo from '../../img/ico/twitter-silhouette.svg';
import linkedinlogo from '../../img/ico/linkedin-logo.svg';
import emaillogo from '../../img/ico/email-icon.svg';

const logoStyle = {
  width: '20px',
  height: '21px',
};

const cyflogoStyle = {
  width: '158px',
  height: '50px',
};

const login = {
  display: 'inline-block',
  width: '90px',
};

const handleLink = (linkName) => {
  let URL = '';
  switch (linkName) {
    case 'facebook':
      URL = 'https://www.facebook.com/codeyourfuture.io';
      break;
    case 'twitter':
      URL = 'https://twitter.com/CodeYourFuture_';
      break;
    case 'linkedin':
      URL = 'https://www.linkedin.com/company/codeyourfuture';
      break;
    case 'email':
      URL = 'mailto:contact@codeyourfuture.io';
      break;
    case 'blog':
      URL = 'https://medium.com/@CodeYourFuture';
      break;
    case 1:
      return;
    default:
      break;
  }
  window.open(URL, '_blank');
};

type Props = {
  auth: Object,
};

const Navigation = ({ auth }: Props) => (
  <Navbar collapseOnSelect>
    <Navbar.Header>
      <Link to="/">
        <img src={cyflogo} style={cyflogoStyle} alt="logo" />
      </Link>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight onSelect={handleLink}>
        <LinkContainer to="/about">
          <NavItem eventKey={1}>About</NavItem>
        </LinkContainer>
        <LinkContainer to="/students">
          <NavItem eventKey={1}>Students</NavItem>
        </LinkContainer>
        <LinkContainer to="/volunteers">
          <NavItem eventKey={1}>Volunteers</NavItem>
        </LinkContainer>
        {auth.isAuthenticated() && (
          <LinkContainer to="/events">
            <NavItem eventKey={1}>Events</NavItem>
          </LinkContainer>
        )}

        <LinkContainer to="/partners">
          <NavItem eventKey={1}>Partners</NavItem>
        </LinkContainer>
        <LinkContainer to="/meet-the-team">
          <NavItem eventKey={1}>Meet the team</NavItem>
        </LinkContainer>
        <NavItem className="nav-icon" eventKey="blog">
          Blog
        </NavItem>
        <NavItem className="nav-icon" eventKey="facebook">
          <img src={fblogo} style={logoStyle} alt="facebook" />
        </NavItem>
        <NavItem className="nav-icon" eventKey="twitter">
          <img src={twitterlogo} style={logoStyle} alt="twitter" />
        </NavItem>
        <NavItem className="nav-icon" eventKey="linkedin">
          <img src={linkedinlogo} style={logoStyle} alt="linkedin" />
        </NavItem>
        <NavItem className="nav-icon" eventKey="email">
          <img src={emaillogo} style={logoStyle} alt="email" />
        </NavItem>
        {setFeatures().active('login') && (
          <div style={login}>
            {!auth.isAuthenticated() && (
              <button type="button" onClick={auth.login}>
                Log In
              </button>
            )}
            {auth.isAuthenticated() && (
              <button type="button" onClick={auth.logout}>
                Log Out
              </button>
            )}
          </div>
        )}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Navigation;
