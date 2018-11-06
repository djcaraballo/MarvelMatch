import React from 'react'
import Quiz from './Quiz'
import { shallow } from 'enzyme'

describe('Quiz Component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <Quiz />
    )
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  xit('should start with the correct default state', () => {

  })

  xit('should set state with a question and an array of answerOptions', () => {

  })

  describe('setUserAnswer function', () => {
    xit('should set state with the correct values for answersCount and answer', () => {

    })
  })

  describe('setNextQuestion function', () => {
    xit('should set state with the correct values', () => {

    })
  })

  describe('setResults function', () => {
    xit('should set state with the correct result if there is a result', () => {

    })

    xit('should set state with Undetermined if there is no result', () => {

    })
  })

  describe('renderQuizContainer function', () => {
    xit('should return an instance of the QuizContainer component', () => {

    })
  })

  describe('renderResult function', () => {
    xit('should return an instance of the Result component', () => {

    })
  })
})