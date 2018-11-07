import * as API from '../API/'

class Cleaner {
  constructor() {
    this.fetchAllCharacters = API.fetchAllCharacters
    this.fetchAlternateStats = API.fetchAlternateStats
  }

  getCharacterData = async () => {
    const characterData = await this.fetchAllCharacters()
    const describedChars = await this.filterCharacters(characterData)
    return describedChars
  }

  filterCharacters = async (characterArray) => {
    const newCharArray = characterArray.filter(character => {
      return character.description !== ""
    })
    return newCharArray
  }

  cleanCharacterCollection = async () => {
    const uncleanCollection =  await this.getCharacterData()
    const cleanCollection = uncleanCollection.map(character => {
      return ({
        name: character.name,
        id: character.id,
        description: character.description,
        siteURL: character.urls[0].url,
      })
    })
    return cleanCollection
  }

  cleanAltCollection = async () => {
    const uncleanAltCollection = await this.filterAltStats()
    const modifiedCollection = uncleanAltCollection.map(character => {
      return ({
        name: character.name,
        appearance: character.appearance,
        powerstats: character.powerstats,
        imageURL: character.images.sm,
        matchTally: 0
      })
    })
    return modifiedCollection
  }

  combineCharacterObjects = async () => {
    const array1 = await this.cleanCharacterCollection()
    const array2 = await this.cleanAltCollection()
    const newChars = array1.reduce((newCharArray, char) => {
      let newCharObj;
      array2.forEach(altCharObj => {
        if(char.name === altCharObj.name) {
          newCharObj = {...char, ...altCharObj}
          newCharArray.push(newCharObj)
        } 
      })

      return newCharArray
    }, [])
    console.log(newChars)
    return newChars
  }

  cleanAltStats = async () => {
    const uncleanStats = await this.fetchAlternateStats()
    return uncleanStats
  }

  filterAltStats = async () => {
    const unfilteredStats = await this.cleanAltStats()
    const filteredStats = unfilteredStats.filter((char) => {
      return char.biography.publisher === 'Marvel Comics'
    })
    return filteredStats
  }
}

export default Cleaner



