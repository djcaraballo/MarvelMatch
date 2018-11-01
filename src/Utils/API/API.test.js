import React from 'react'
import * as API from './'

const mockData = 'someData'

describe('API', () => {
  it('should call fetch with the correct params', () => {
    const mockUrl = 'someUrl.com'
    window.fetch = jest.fn().mockImplementation(() => {
      Promise.resolve({
        status: 200,
        json: () => Promise.resolve(mockData)
      })
    })
    API.fetchInfo(mockUrl)
    expect(window.fetch).toHaveBeenCalledWith(mockUrl)
  })

  it('should throw an error if fetch call fails', () => {
    const mockUrl = 'someUrl.com'
    const expected = Error('Too bad your fetch failed, chump!')
    window.fetch = jest.fn().mockImplementation(() => {
      Promise.resolve({
        status: 500,
        json: () => Promise.resolve()
      })
    })
    expect(API.fetchInfo(mockUrl)).rejects.toEqual(expected)
  })
})