import React from 'react'
import {Quiz, mapStateToProps } from './Quiz'
import { shallow } from 'enzyme'
import { cleanCharacters } from '../../Utils/MockData/mockCleanCharacters'

describe('Quiz Component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Quiz characters={cleanCharacters} />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should start with the correct default state', () => {
    const mockState = {
      counter: 0,
      questionId: 1,
      question: "What color are your eyes?",
      answerOptions: [
        {
          type: "blue",
          content: "Blue"
        },
        {
          type: "brown",
          content: "Brown"
        },
        {
          type: "green",
          content: "Green"
        },
        {
          type: "other",
          content: "Other"
        },
      ],
      answer: '',
      answersCount: {
        blue: 0,
        brown: 0,
        green: 0,
        other: 0,
        blond: 0,
        black: 0,
        red: 0,
        auburn: 0,
        alternate: 0,
        human: 0,
        alien: 0,
        spirit: 0,
        mutant: 0,
        cyborg: 0
      },
      result: ''
    }
    expect(wrapper.state()).toEqual(mockState)
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