import React from 'react'
import * as Cleaner from './'
import * as API from '../API/'
import { uncleanCharacters } from '../MockData/mockUncleanCharacters'
import { cleanCharacters } from '../MockData/mockCleanCharacters'

describe('Cleaners', () => {
  API.fetchAllCharacters = jest.fn(() => {
    return uncleanCharacters
  })
  
  describe('getCharacterData function', () => {
    it('should call fetchAllCharacters', async () => {
      await Cleaner.getCharacterData()
      expect(API.fetchAllCharacters).toHaveBeenCalled()
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