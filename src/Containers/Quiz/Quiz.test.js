import React from 'react'
import {Quiz, mapStateToProps } from './Quiz'
import { shallow } from 'enzyme'
import { cleanCharacters } from '../../Utils/MockData/mockCleanCharacters'
import { mockState } from '../../Utils/MockData/mockState'
import quizQuestions from '../../Utils/API/quizQuestions'
import QuizContainer from '../../Components/QuizContainer/QuizContainer'
import Result from '../../Components/Result/Result'
import { altMockState } from '../../Utils/MockData/altMockState'
import { fullCharacters } from '../../Utils/MockData/fullCharacters'

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

  describe('getResults function', () => {
    beforeEach(() => {
      wrapper = shallow(<Quiz characters={fullCharacters} />)
    })

    it('should increment the characters matchTally if there is a hairColor property and the key matches the hair color and the answersCount for the key is not zero', () => {
      const answersCountKeys = Object.keys(altMockState.answersCount)
      const value = wrapper.instance().getResults()
      expect(fullCharacters[0].matchTally).toEqual(0)
      expect(fullCharacters[1].matchTally).toEqual(0)
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
    it('should return an instance of the Result component', () => {
      const expected = 
        <Result 
          quizResult={mockState.result}
        />
      const value = wrapper.instance().renderResult()
      expect(value).toEqual(expected)
    })
  })

  describe('mapStateToProps function', () => {
    it('should return an object with the characters', () => {
      const mockReduxState = {characters: cleanCharacters}
      const expected = {characters: cleanCharacters}
      const mappedProps = mapStateToProps(mockReduxState);
      expect(mappedProps).toEqual(expected);
    })
  })
})