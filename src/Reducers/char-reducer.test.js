import charactersReducer from './char-reducer'
import * as characterActions from '../Actions/characterActions'
import { cleanCharacters } from '../Utils/MockData/mockCleanCharacters'

describe('charactersReducer', () => {
  let result
  let mockAction
  let mockPayload

  it('should return original state as default', () => {
    result = charactersReducer(undefined, { type: 'NONE'})
    expect(result).toEqual([])
  })

  it('should add a movie to state', () => {
    mockAction = {
      type: 'ADD_CHARACTERS',
      characters: [cleanCharacters[0]]
    }
    mockPayload = cleanCharacters[0]
    result = charactersReducer([], mockAction)
    expect(result).toEqual([mockPayload])
  })
})