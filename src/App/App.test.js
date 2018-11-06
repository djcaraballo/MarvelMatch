import React from 'react';
import ReactDOM from 'react-dom';
import { App, mapStateToProps, mapDispatchToProps } from './App';
import { shallow } from 'enzyme'
import { cleanCharacters } from '../Utils/MockData/mockCleanCharacters'
import { addCharacters } from '../Actions/characterActions'

describe('App Component', () => {
  let wrapper
  let mockAddCharacters = jest.fn()

  beforeEach(() => {
    wrapper = shallow(
      <App 
        characters={cleanCharacters}
        addCharacters={mockAddCharacters}
      />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  describe('mapStateToProps function', () => {
    it('should return an object with the characters', () => {
      const mockState = {
        characters: cleanCharacters
      }
      const expected = {
        characters: cleanCharacters
      }
      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(expected)
    })
  })

  describe('mapDispatchToProps function', () => {
    it('should call dispatch with an addCharacters action when addCharacters is called', () => {
      const mockCharacter = cleanCharacters[0]
      const mockDispatch = jest.fn()
      const mockAction = addCharacters(mockCharacter)
      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.addCharacters(mockCharacter)
      expect(mockDispatch).toHaveBeenCalledWith(mockAction)
    })
  })
})
