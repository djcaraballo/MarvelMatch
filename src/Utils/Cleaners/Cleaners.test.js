import React from 'react'
import * as Cleaner from './'
import * as API from '../API/'
import mockUncleanCharacters from '../MockData/mockUncleanCharacters'

jest

describe('Cleaners', () => {
  describe('getCharacterData function', () => {
    it('should call fetchInfo', async () => {
      API.fetchInfo = jest.fn().mockImplementation(() => Promise.resolve())
      await Cleaner.getCharacterData()
      expect(API.fetchInfo).toHaveBeenCalled()
    })
  })

  describe('cleanCharacterCollection function', () => {
    it('should call getCharacterData', async () => {
      await Cleaner.cleanCharacterCollection()
      expect(Cleaner.getCharacterData).toHaveBeenCalled()
    })

    it('should return an array of cleaned character objects', () => {

    })
  })
  
})