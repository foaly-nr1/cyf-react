import React from 'react';
import { shallow } from 'enzyme';
import LogoListItem from './LogoListItem';

describe('LogoListItem', () => {
  const props = {
    href: 'a-company-url',
    src: 'logoImageSource.png',
    alt: 'alternateName'
  };

  let logoListItem;

  beforeEach(() => {
    logoListItem = shallow(<LogoListItem {...props} />);
  });

  it('renders a div with a className logo-list-item', () => {
    expect(logoListItem.hasClass('logo-list-item')).toEqual(true);
  });

  it('renders an a tag with an image', () => {
    expect(logoListItem.find('a').find('img')).toHaveLength(1);
  });

  it('renders an a tag with a link to a company url', () => {
    expect(logoListItem.find('a').prop('href')).toEqual(props.href);
  });

  it('renders an image from a specified source', () => {
    expect(logoListItem.find('a').find('img').prop('src')).toEqual(props.src);
  });

  it('renders an image with an alternate name', () => {
    expect(logoListItem.find('a').find('img').prop('alt')).toEqual(props.alt);
  });
});
