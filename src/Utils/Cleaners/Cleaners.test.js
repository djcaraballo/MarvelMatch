import React from 'react'
// import { Cleaner } from './'
import * as Cleaner from './'
import * as API from '../API/'

describe('Cleaners', () => {
  describe('getCharacterData function', () => {
    it('should call fetchInfo', async () => {
      API.fetchInfo = jest.fn().mockImplementation(() => Promise.resolve())
      await Cleaner.getCharacterData()
      await expect(API.fetchInfo).toHaveBeenCalled()
    })
  })

  describe('cleanCharacterCollection function', () => {
    it('should call getCharacterData', async () => {
      Cleaner.getCharacterData = jest.fn()
      await Cleaner.cleanCharacterCollection()
      await expect(Cleaner.getCharacterData).toHaveBeenCalled()
    })

    it('should return an array of cleaned character objects', () => {

    })
  })
  
})