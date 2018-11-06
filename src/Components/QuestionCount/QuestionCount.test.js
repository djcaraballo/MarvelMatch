import React from 'react'
import QuestionCount from './QuestionCount'
import { shallow } from 'enzyme'

describe('QuestionCount Component', () => {
  let wrapper
  let mockCounter = 0
  let mockTotal = 11

  beforeEach(() => {
    wrapper = shallow(
      <QuestionCount 
        counter={mockCounter}
        total={mockTotal}
      />
    )
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})