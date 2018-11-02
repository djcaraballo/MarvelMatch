import React from 'react'
import { shallow } from 'enzyme'
import NewHeroSignupForm from './NewHeroSignupForm'

describe('NewHeroSignupForm Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<NewHeroSignupForm />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should have the correct default state', () => {
    expect(wrapper.state().name).toEqual('')
    expect(wrapper.state().email).toEqual('')
    expect(wrapper.state().password).toEqual('')
  })

  describe('handleChange function', () => {
    xit('should set state with the correct names and values', () => {

    })
  })

  describe('handleSubmit function', () => {
    xit('should set state back to default', () => {

    })
  })
})