import * as actions from './characterActions'
import { uncleanCharacters } from '../Utils/MockData/mockUncleanCharacters'

describe('actions', () => {
  it('should have a type of ADD_CHARACTERS', () => {
    const result = actions.addCharacters(uncleanCharacters)
    const expectedResults = {characters: uncleanCharacters, type: 'ADD_CHARACTERS'}
    expect(result).toEqual(expectedResults)
  })
})