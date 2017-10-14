import React from 'react'
import { shallow } from 'enzyme'
import LogoListItem from './LogoListItem'

// configure enzyme
// TODO: move to a separate file
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'
configure({ adapter: new Adapter() })

describe('LogoListItem', () => {
  const props = {
    href: 'a-company-url',
    src: 'logoImageSource.png',
    alt: 'alternateName'
  }

  it('renders a div with a className logo-list-item', () => {
    const logoListItem = shallow(<LogoListItem />)
    expect(logoListItem.hasClass('logo-list-item')).toEqual(true)
  })

  it('renders an a tag with an image', () => {
    const logoListItem = shallow(<LogoListItem />)
    expect(logoListItem.find('a').find('img')).toHaveLength(1)
  })

  it('renders an a tag with a link to a company url', () => {
    const logoListItem = shallow(<LogoListItem {...props} />)
    expect(logoListItem.find('a').prop('href')).toEqual(props.href)
  })

  it('renders an image from a specified source', () => {
    const logoListItem = shallow(<LogoListItem {...props} />)
    expect(logoListItem.find('a').find('img').prop('src')).toEqual(props.src)
  })

  it('renders an image with an alternate name', () => {
    const logoListItem = shallow(<LogoListItem {...props} />)
    expect(logoListItem.find('a').find('img').prop('alt')).toEqual(props.alt)
  })
})
