import React from 'react';
import { shallow } from 'enzyme';
import { PartnerLogos } from './PartnerLogos';
import LogoList from './LogoList';

describe('PartnerLogos', () => {
  const props = {
    partners: {
      sectionOne: [
        {
          id: 'featuredCompany',
          name: 'Featured Company',
          url: 'url-to-featured-company',
          logo: 'logoForFeaturedCompany.png',
          featured: true
        },
      ],
      sectionTwo: [
        {
          id: 'nonFeaturedCompany1',
          name: 'Non-featured Company 1',
          url: 'url-to-non-featured-company-1',
          logo: 'logoForNonFeaturedCompany1.png',
          featured: false
        },
      ],
      sectionThree: [
        {
          id: 'nonFeaturedCompany1',
          name: 'Non-featured Company 1',
          url: 'url-to-non-featured-company-1',
          logo: 'logoForNonFeaturedCompany1.png',
          featured: false
        }
      ]
    }
  };

  let partnerLogos;
  const sections = Object.keys(props.partners);

  beforeEach(() => {
    partnerLogos = shallow(<PartnerLogos {...props} />);
  });

  it('renders a LogoList for each section of partners', () => {
    expect(partnerLogos.find(LogoList)).toHaveLength(sections.length);
  });

  sections.forEach(section => {
    it(`passes the right props to ${section}'s LogoList`, () => {
      const sectionDiv = partnerLogos.find(`.partners__${section}`);
      expect(sectionDiv.find(LogoList).prop('partners')).toEqual(props.partners[section]);
    });
  });
});
