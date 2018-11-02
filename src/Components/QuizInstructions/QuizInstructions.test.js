import React from 'react'
import QuizInstructions from './QuizInstructions'
import { shallow } from 'enzyme'

describe('QuizInstructions Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<QuizInstructions />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})