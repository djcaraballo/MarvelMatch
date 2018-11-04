import * as API from '../API/'

export const getCharacterData = async () => {
  const characterData = await API.fetchAllCharacters()
  const describedChars = await filterCharacters(characterData)
  return describedChars
}

export const filterCharacters = async (characterArray) => {
  const newCharArray = characterArray.filter(character => {
    return character.description !== ""
  })
  return newCharArray
}

export const cleanCharacterCollection = async () => {
  const uncleanCollection =  await getCharacterData()
  const cleanCollection = uncleanCollection.map(character => {
    return ({
      name: character.name,
      id: character.id,
      description: character.description,
      imageURL: `${character.thumbnail.path}/standard_fantastic.${character.thumbnail.extension}`,
      link: character.urls[0].url,
    })
  })
  console.log(cleanCollection)
  return cleanCollection
}





