import React from 'react'
import {Quiz, mapStateToProps } from './Quiz'
import { shallow } from 'enzyme'
import { cleanCharacters } from '../../Utils/MockData/mockCleanCharacters'
import { mockState } from '../../Utils/MockData/mockState'

describe('Quiz Component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Quiz characters={cleanCharacters} />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should start with the correct default state', () => {
    expect(wrapper.state()).toEqual(mockState)
  })

  describe('setUserAnswer function', () => {
    let wrapper

    beforeEach(() => {
      wrapper = shallow(<Quiz characters={cleanCharacters} />)
    })

    it('should set state with the correct values for answersCount and answer', () => {
      const mockAnswer = 'Something'
      const expectedAnswerCount = {...wrapper.state().answersCount, Something: NaN}
      wrapper.instance().setUserAnswer(mockAnswer)
      console.log(wrapper.state())
      expect(wrapper.state().answersCount).toEqual(expectedAnswerCount)
      expect(wrapper.state().answer).toEqual(mockAnswer)
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