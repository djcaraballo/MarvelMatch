import React from 'react'
import AnswerOption from './AnswerOption'
import { shallow } from 'enzyme'

describe('AnswerOption Component', () => {
  let wrapper
  let mockAnswerType = ''
  let mockAnswerContent = ''
  let mockAnswer = ''
  let mockOnAnswerSelected = jest.fn()

  beforeEach(() => {
    wrapper = shallow(
      <AnswerOption 
        answerType={mockAnswerType}
        answerContent={mockAnswerContent}
        answer={mockAnswer}
        onAnswerSelected={mockOnAnswerSelected}
      />
    )
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})