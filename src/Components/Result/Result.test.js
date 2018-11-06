import React from 'react'
import Result from './Result'
import { shallow } from 'enzyme'

describe('Result Component', () =>{
  let wrapper
  let mockQuizResult = ''

  beforeEach(() => {
    wrapper = shallow(<Result quizResult={mockQuizResult} />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})