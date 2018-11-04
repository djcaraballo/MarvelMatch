import React from 'react'
import * as Cleaner from './'
import * as API from '../API/'
import mockUncleanCharacters from '../MockData/mockUncleanCharacters'

jest

describe('Cleaners', () => {
  describe('getCharacterData function', () => {
    it('should call fetchAllCharacters', async () => {
      API.fetchInfo = jest.fn().mockImplementation(() => Promise.resolve())
      await Cleaner.getCharacterData()
      expect(API.fetchInfo).toHaveBeenCalled()
    })

    xit('should call filterCharacters with the correct params', () => {

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