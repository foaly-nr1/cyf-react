import React from 'react';
import { shallow } from 'enzyme';
import LogoList from './LogoList';
import LogoListItem from './LogoListItem';

describe('LogoList', () => {
  const props = {
    partners: [
      {
        id: 'featuredCompany',
        name: 'Featured Company',
        url: 'url-to-featured-company',
        logo: 'logoForFeaturedCompany.png',
        featured: true
      },
      {
        id: 'nonFeaturedCompany1',
        name: 'Non-featured Company 1',
        url: 'url-to-non-featured-company-1',
        logo: 'logoForNonFeaturedCompany1.png',
        featured: false
      },
      {
        id: 'nonFeaturedCompany2',
        name: 'Non-featured Company 2',
        url: 'url-to-non-featured-company-2',
        logo: 'logoForNonFeaturedCompany2.png',
        featured: false
      }
    ]
  };

  let logoList;
  const nonFeaturedPartners = props.partners.filter(partner => !partner.featured);

  beforeEach(() => {
    logoList = shallow(<LogoList {...props} />);
  });

  it('renders a div with a className logo-list', () => {
    expect(logoList.hasClass('logo-list')).toEqual(true);
  });

  it('renders LogoListItem only for non-featured companies', () => {
    expect(logoList.find(LogoListItem)).toHaveLength(nonFeaturedPartners.length);
  });

  it('passes the right props to LogoListItem', () => {
    const logoListItems = logoList.find(LogoListItem);

    logoListItems.forEach((item, index) => {
      expect(item.prop('alt')).toEqual(nonFeaturedPartners[index].name);
      expect(item.prop('href')).toEqual(nonFeaturedPartners[index].url);
      expect(item.prop('src')).toEqual(nonFeaturedPartners[index].logo);
    });
  });
});
