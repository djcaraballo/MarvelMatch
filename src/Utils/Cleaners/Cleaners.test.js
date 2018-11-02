import React from 'react'
import * as Cleaner from './'
import * as API from '../API/'

describe('getCharacters function', () => {
  it('should call fetchInfo', async () => {
    API.fetchInfo = jest.fn().mockImplementation(() => Promise.resolve())
    await Cleaner.getCharacters()
    await expect(API.fetchInfo).toHaveBeenCalled()
  })
})