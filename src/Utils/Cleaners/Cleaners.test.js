import React from 'react'
import Cleaner from './'
import * as API from '../API/'
import { uncleanCharacters } from '../MockData/mockUncleanCharacters'
import { cleanCharacters } from '../MockData/mockCleanCharacters'

describe('Cleaners', () => {
  const mockCleaner = new Cleaner()

  mockCleaner.fetchAllCharacters = jest.fn(() => {
    return uncleanCharacters
  })
  
  describe('getCharacterData function', () => {
    it('should call fetchAllCharacters', async () => {
      await mockCleaner.getCharacterData()
      expect(mockCleaner.fetchAllCharacters).toHaveBeenCalled()
    })

    it('should call filterCharacters with the correct params', async () => {
      mockCleaner.filterCharacters = jest.fn()
      const mockCharacterData = await mockCleaner.fetchAllCharacters()
      await mockCleaner.getCharacterData()
      expect(mockCleaner.filterCharacters).toHaveBeenCalledWith(mockCharacterData)
    })
  })

  describe('filterCharacters function', () => {
    it('should return a filtered array of characters', async () => {
      const mockCleaner = new Cleaner()
      const filteredArray = await mockCleaner.filterCharacters(uncleanCharacters)
      const expected = [uncleanCharacters[1], uncleanCharacters[2]]
      expect(filteredArray).toEqual(expected)
    })
  })

  describe('cleanCharacterCollection function', () => {
    const mockCleaner = new Cleaner()

    it('should call getCharacterData', () => {
      mockCleaner.getCharacterData = jest.fn()
      mockCleaner.cleanCharacterCollection()
      expect(mockCleaner.getCharacterData).toHaveBeenCalled()
    })

    it('should return an array of cleaned character objects', async () => {
      mockCleaner.getCharacterData = jest.fn(() => {
        return uncleanCharacters
      })
      const mockCleanCharacters = await mockCleaner.cleanCharacterCollection()
      const expected = [
        {
          "id": 1011334,
          "name": "3-D Man",
          "description": "",
          "imageURL": "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784/standard_fantastic.jpg",
          "siteURL": "http://marvel.com/characters/74/3-d_man?utm_campaign=apiRef&utm_source=a4d95911b60999871aaed8a8c43823f6"
        },
        {
          "id": 1017100,
          "name": "A-Bomb (HAS)",
          "description": "Rick Jones has been Hulk's best bud since day one, but now he's more than a friend...he's a teammate! Transformed by a Gamma energy explosion, A-Bomb's thick, armored skin is just as strong and powerful as it is blue. And when he curls into action, he uses it like a giant bowling ball of destruction! ",
          "imageURL": "http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16/standard_fantastic.jpg",
          "siteURL": "http://marvel.com/characters/76/a-bomb?utm_campaign=apiRef&utm_source=a4d95911b60999871aaed8a8c43823f6"
        },
        {
          "name": "A.I.M.",
          "id": 1009144,
          "description": "AIM is a terrorist organization bent on destroying the world.",
          "imageURL": "http://i.annihil.us/u/prod/marvel/i/mg/6/20/52602f21f29ec/standard_fantastic.jpg",
          "siteURL": "http://marvel.com/characters/77/aim.?utm_campaign=apiRef&utm_source=a4d95911b60999871aaed8a8c43823f6"
        }
      ]
      expect(mockCleanCharacters).toEqual(expected)
    })
  })
})