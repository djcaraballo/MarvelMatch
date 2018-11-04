import * as API from '../API/'

class Cleaner {
  constructor() {
    this.fetchAllCharacters = API.fetchAllCharacters
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
        imageURL: `${character.thumbnail.path}/standard_fantastic.${character.thumbnail.extension}`,
        siteURL: character.urls[0].url,
      })
    })
    return cleanCollection
  }
}

export default Cleaner



