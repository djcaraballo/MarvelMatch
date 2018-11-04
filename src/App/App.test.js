import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { shallow } from 'enzyme'
import { cleanCharacters } from '../Utils/MockData/mockCleanCharacters'

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
})
