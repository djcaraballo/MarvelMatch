import React from 'react'
import {Quiz, mapStateToProps } from './Quiz'
import { shallow } from 'enzyme'
import { cleanCharacters } from '../../Utils/MockData/mockCleanCharacters'
import { mockState } from '../../Utils/MockData/mockState'
import quizQuestions from '../../Utils/API/quizQuestions'
import QuizContainer from '../../Components/QuizContainer/QuizContainer'

let wrapper

beforeEach(() => {
  wrapper = shallow(<Quiz characters={cleanCharacters} />)
})

describe('Quiz Component', () => {
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should start with the correct default state', () => {
    expect(wrapper.state()).toEqual(mockState)
  })

  describe('setUserAnswer function', () => {
    it('should set state with the correct values for answersCount and answer', () => {
      const mockAnswer = 'Something'
      const expectedAnswerCount = {...wrapper.state().answersCount, Something: NaN}
      wrapper.instance().setUserAnswer(mockAnswer)
      expect(wrapper.state().answersCount).toEqual(expectedAnswerCount)
      expect(wrapper.state().answer).toEqual(mockAnswer)
    })
  })

  describe('setNextQuestion function', () => {
    it('should set state with the correct values', () => {
      const counter = 1
      const questionId = 2
      wrapper.instance().setNextQuestion()
      expect(wrapper.state().counter).toEqual(1)
      expect(wrapper.state().questionId).toEqual(2)
      expect(wrapper.state().question).toEqual(quizQuestions[counter].question)
      expect(wrapper.state().answerOptions).toEqual(quizQuestions[counter].answers)
    })
  })

  describe('setResults function', () => {
    it('should set state with the correct result if there is a result', () => {
      const mockResult = [{name: 'Some'}, {name: 'Things'}]
      const index = 0
      wrapper.instance().setResults(mockResult)
      expect(wrapper.state().result).toEqual('Some')
    })

    it('should set state with Undetermined if there is no result', () => {
      const mockResult = []
      const index = 1
      wrapper.instance().setResults(mockResult)
      expect(wrapper.state().result).toEqual('Undetermined')
    })
  })

  describe('handleCharacterMatch function', () => {
    it('should return a character object with a matching name', () => {
      wrapper.state().result = "A-Bomb (HAS)"
      const character = wrapper.instance().handleCharacterMatch()
      expect(character.name).toEqual("A-Bomb (HAS)")
    })
  })

  describe('renderQuizContainer function', () => {
    it('should return an instance of the QuizContainer component', () => {
      const handleAnswerSelected = jest.fn()
      const expected = 
        <QuizContainer 
          answer={mockState.answer}
          answerOptions={mockState.answerOptions}
          questionId={mockState.questionId}
          question={mockState.question}
          questionTotal={quizQuestions.length}
          onAnswerSelected={wrapper.instance().handleAnswerSelected}
        />
      const value = wrapper.instance().renderQuizContainer()
      expect(value).toEqual(expected)
    })
  })

  describe('renderResult function', () => {
    xit('should return an instance of the Result component', () => {

    })
  })
})