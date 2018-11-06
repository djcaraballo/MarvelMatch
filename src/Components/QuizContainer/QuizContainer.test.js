import React from 'react'
import QuizContainer from './QuizContainer'
import AnswerOption from '../AnswerOption/AnswerOption'
import { shallow } from 'enzyme'

describe('QuizContainer Component', () => {
  let wrapper
  let mockAnswer = ''
  let mockAnswerOptions = []
  let mockCounter = 0
  let mockQuestion = ''
  let mockQuestionId = 0
  let mockQuestionTotal = 0
  let mockOnAnswerSelected = jest.fn()

  beforeEach(() => {
    wrapper = shallow(
      <QuizContainer 
        answer={mockAnswer}
        answerOptions={mockAnswerOptions}
        counter={mockCounter}
        question={mockQuestion}
        questionId={mockQuestionId}
        questionTotal={mockQuestionTotal}
        onAnswerSelected={mockOnAnswerSelected}
      />
    )
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  describe('renderAnswerOptions function', () => {
    let wrapper

    beforeEach(() => {
      wrapper = shallow(
        <QuizContainer 
          answer={mockAnswer}
          answerOptions={mockAnswerOptions}
          counter={mockCounter}
          question={mockQuestion}
          questionId={mockQuestionId}
          questionTotal={mockQuestionTotal}
          onAnswerSelected={mockOnAnswerSelected}
        />
      )
    })

    xit('should return an AnswerOption component instance', () => {
      const mockKey = {type: '', content: ''}
      const expected = <AnswerOption
                          key={mockKey.content}
                          answerContent={mockKey.content}
                          answerType={mockKey.type}
                          answer={mockAnswer}
                          questionId={mockQuestionId}
                          onAnswerSelected={mockOnAnswerSelected} 
                        />
      wrapper.instance().renderAnswerOptions(mockKey)
      expect(wrapper.instance().renderAnswerOptions(mockKey)).toEqual(expected)
    })
  })
})