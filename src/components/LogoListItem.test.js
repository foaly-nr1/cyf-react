import React from 'react'
import { shallow } from 'enzyme'
import LogoListItem from './LogoListItem'

import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'
configure({ adapter: new Adapter() })

describe('LogoListItem', () => {
  it('renders a div with a className logo-list-item', () => {
    const logoListItem = shallow(<LogoListItem />)

    expect(logoListItem.hasClass('logo-list-item')).toEqual(true)
  })

  it('renders an a tag with an image', () => {
    const logoListItem = shallow(<LogoListItem />)
    const aTag = logoListItem.find('a')

    expect(aTag).toHaveLength(1)
    expect(aTag.find('img')).toHaveLength(1)
  })
})
