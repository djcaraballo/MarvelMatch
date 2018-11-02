import * as API from '../API/'
import { url } from '../API/API-key'

export const getCharacters = async () => {
  const characterData = await API.fetchInfo(url)
  await console.log(characterData)
  return characterData.data.results
  //characterData.data.results should be an array of character objects
}