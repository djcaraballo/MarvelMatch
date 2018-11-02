import * as API from '../API/'
import { url } from '../API/API-key'

export const getCharacterData = async () => {
  const characterData = await API.fetchInfo(url)
  console.log(characterData)
  return characterData
}

export const cleanCharacterCollection = async () => {
  const uncleanCharacters = await getCharacterData()
  console.log(uncleanCharacters)
  return uncleanCharacters
}


