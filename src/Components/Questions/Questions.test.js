import React from 'react'
import Question from './Questions'
import { shallow } from 'enzyme'

describe('Question Component', () => {
  let wrapper
  let mockText = ''

  beforeEach(() => {
    wrapper = shallow(<Question text={mockText} />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})