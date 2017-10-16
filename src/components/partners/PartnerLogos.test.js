import React from 'react';
import { shallow } from 'enzyme';
import { PartnerLogos } from './PartnerLogos';
import LogoList from './LogoList';

describe('PartnerLogos', () => {
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

  let partnerLogos;

  beforeEach(() => {
    partnerLogos = shallow(<PartnerLogos {...props} />)
  });

  it('renders a LogoList', () => {
    expect(partnerLogos.find(LogoList)).toHaveLength(1)
  });

  it('passes the partners as a props to LogoList', () => {
    expect(partnerLogos.find(LogoList).prop('partners')).toEqual(props.partners)
  });
});
