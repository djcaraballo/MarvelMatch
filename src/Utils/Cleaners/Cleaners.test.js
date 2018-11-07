import React from 'react'
import Cleaner from './'
import * as API from '../API/'
import { uncleanCharacters } from '../MockData/mockUncleanCharacters'
import { cleanCharacters } from '../MockData/mockCleanCharacters'
import { fullCharacters, uncleanAltCharacters } from '../MockData/fullCharacters'

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
          "siteURL": "http://marvel.com/characters/74/3-d_man?utm_campaign=apiRef&utm_source=a4d95911b60999871aaed8a8c43823f6"
        },
        {
          "id": 1017100,
          "name": "A-Bomb (HAS)",
          "description": "Rick Jones has been Hulk's best bud since day one, but now he's more than a friend...he's a teammate! Transformed by a Gamma energy explosion, A-Bomb's thick, armored skin is just as strong and powerful as it is blue. And when he curls into action, he uses it like a giant bowling ball of destruction! ",
          "siteURL": "http://marvel.com/characters/76/a-bomb?utm_campaign=apiRef&utm_source=a4d95911b60999871aaed8a8c43823f6"
        },
        {
          "name": "A.I.M.",
          "id": 1009144,
          "description": "AIM is a terrorist organization bent on destroying the world.",
          "siteURL": "http://marvel.com/characters/77/aim.?utm_campaign=apiRef&utm_source=a4d95911b60999871aaed8a8c43823f6"
        }
      ]
      expect(mockCleanCharacters).toEqual(expected)
    })
  })

  describe('cleanAltCollection', () => {
    const mockCleaner = new Cleaner()

    it('should call filterAltStats', async () => {
      mockCleaner.filterAltStats = jest.fn()
      mockCleaner.cleanAltCollection()
      await expect(mockCleaner.filterAltStats).toHaveBeenCalled()
    })

    it('should return an array of cleaned character objects', async () => {
      mockCleaner.filterAltStats = jest.fn(() => {
        return uncleanAltCharacters
      })
      const mockCleanCharacters = await mockCleaner.cleanAltCollection()
      const expected = [
        {
          "name": "A-Bomb",
          "powerstats": {
            "intelligence": 38,
            "strength": 100,
            "speed": 17,
            "durability": 80,
            "power": 24,
            "combat": 64
          },
          "appearance": {
            "gender": "Male",
            "race": "Human",
            "height": [
              "6'8",
              "203 cm"
            ],
            "weight": [
              "980 lb",
              "441 kg"
            ],
            "eyeColor": "Yellow",
            "hairColor": "No Hair"
          },
          "imageURL": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/1-a-bomb.jpg",
          "matchTally": 0
        },
        {
          "name": "Abe Sapien",
          "powerstats": {
            "intelligence": 88,
            "strength": 28,
            "speed": 35,
            "durability": 65,
            "power": 100,
            "combat": 85
          },
          "appearance": {
            "gender": "Male",
            "race": "Icthyo Sapien",
            "height": [
              "6'3",
              "191 cm"
            ],
            "weight": [
              "145 lb",
              "65 kg"
            ],
            "eyeColor": "Blue",
            "hairColor": "No Hair"
          },
          "imageURL": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/2-abe-sapien.jpg",
          "matchTally": 0
        }
      ]
      expect(mockCleanCharacters).toEqual(expected)
    })
  })

  describe('combineCharacterObjects function', () => {
    it('should call cleanCharacterCollection and cleanAltCollection', async () => {
      mockCleaner.cleanCharacterCollection = jest.fn()
      mockCleaner.cleanAltCollection = jest.fn()
      mockCleaner.combineCharacterObjects()
      await expect(mockCleaner.cleanCharacterCollection).toHaveBeenCalled()
      await expect(mockCleaner.cleanAltCollection).toHaveBeenCalled()
    })
  })

  describe('cleanAltStats function', () => {
    it('should call fetchAlternateStats', () => {
      mockCleaner.fetchAlternateStats = jest.fn()
      mockCleaner.cleanAltStats()
      expect(mockCleaner.fetchAlternateStats).toHaveBeenCalled()
    })
  })

  describe('filterAltStats function', () => {
    it('should call cleanAltStats', () => {
      mockCleaner.cleanAltStats = jest.fn()
      mockCleaner.filterAltStats()
      expect(mockCleaner.cleanAltStats).toHaveBeenCalled()
    })
  })
})