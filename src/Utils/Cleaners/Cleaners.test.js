import React from 'react'
// import * as Cleaner from './'
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
    xit('should return a filtered array of characters', async () => {

    })
  })

  describe('cleanCharacterCollection function', () => {
    xit('should call getCharacterData', async () => {
      await Cleaner.cleanCharacterCollection()
      expect(Cleaner.getCharacterData).toHaveBeenCalled()
    })

    xit('should return an array of cleaned character objects', async () => {

    })
  })
})