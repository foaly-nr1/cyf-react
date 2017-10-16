import React from 'react';
import { shallow } from 'enzyme';
import LogoListItem from './LogoListItem';

describe('LogoListItem', () => {
  const props = {
    href: 'a-company-url',
    src: 'logoImageSource.png',
    alt: 'alternateName',
    grid: 'grid'
  };

  let logoListItem;

  beforeEach(() => {
    logoListItem = shallow(<LogoListItem {...props} />);
  });

  it('renders a div with a className and the right grids', () => {
    const expectedClassName = `logo-list-item ${props.grid}`;
    expect(logoListItem.prop('className')).toEqual(expectedClassName);
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

  it('renders an image with a name', () => {
    expect(logoListItem.find('a').find('img').prop('alt')).toEqual(props.alt);
  });
});
