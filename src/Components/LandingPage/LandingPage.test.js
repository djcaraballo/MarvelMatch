import React from 'react'
import LandingPage from './LandingPage'
import { shallow } from 'enzyme'

describe('LandingPage Component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<LandingPage />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})