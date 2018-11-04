import * as API from '../API/'
import { url } from '../API/API-key'

export const getCharacterData = async () => {
  const characterData = await API.fetchInfo(url)
  return characterData.data.results
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

export const getCharacterImage = async charURL => {
  const img = await API.fetchInfo(charURL)
  return img
}





