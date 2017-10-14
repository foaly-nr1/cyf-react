import React from 'react';
import { shallow } from 'enzyme';
import LogoList from './LogoList';
import LogoListItem from './LogoListItem';

describe('LogoList', () => {
  const props = {
    partners: [
      {
        id: 'company1',
        name: 'Company 1',
        url: 'url-to-company-1',
        logo: 'logoForCompany1.png',
      },
      {
        id: 'company2',
        name: 'Company 2',
        url: 'url-to-company-2',
        logo: 'logoForCompany2.png',
      }
    ]
  };

  it('renders a div with a className logo-list', () => {
    const logoList = shallow(<LogoList {...props} />);
    expect(logoList.hasClass('logo-list')).toEqual(true);
  });

  it('renders the right number of LogoListItem', () => {
    const logoList = shallow(<LogoList {...props}/>);
    expect(logoList.find(LogoListItem)).toHaveLength(props.partners.length);
  });

  it('passes the right props to LogoListItem', () => {
    const logoList = shallow(<LogoList {...props}/>);
    const logoListItems = logoList.find(LogoListItem);

    logoListItems.forEach((item, index) => {
      expect(item.prop('alt')).toEqual(props.partners[index].name)
      expect(item.prop('href')).toEqual(props.partners[index].url)
      expect(item.prop('src')).toEqual(props.partners[index].logo)
    });
  });
});
