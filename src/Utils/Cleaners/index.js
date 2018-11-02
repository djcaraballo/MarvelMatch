import * as API from '../API/'
import { url } from '../API/API-key'

export const getCharacterData = async () => {
  const characterData = await API.fetchInfo(url)
  return characterData
}

export const cleanCharacterCollection = async () => {
  const uncleanCharacters = await getCharacterData()
  console.log(uncleanCharacters)
}





// export const Cleaner = {
//   async getCharacterData() {
//     const characterData = await API.fetchInfo(url)
//     return characterData
//   },

//   async cleanCharacterCollection() {
//     const uncleanCharacters = await Cleaner.getCharacterData()
//     console.log(uncleanCharacters)
//   }
// }


