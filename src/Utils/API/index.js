import md5 from 'md5'
import { privateKey, publicKey } from './Key'

const timeStamp = Date.now().toString()
const hash = md5(`${timeStamp}${privateKey}${publicKey}`)

export const fetchInfo = async (url) => {
  const response = await fetch(url)
  if (response.status >= 300) {
    throw new Error('Fetch has failed')
  } else {
    const result = await response.json() 
    return result
  }
}

export const fetchAllCharacters = async () => {
  let allCharacters = []
  let offset = 0

  while (offset < 1500) {
    const url = `http://gateway.marvel.com/v1/public/characters?limit=50&offset=${offset}&ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`
    const newCharactersData = await fetchInfo(url)
    const newCharacters = newCharactersData.data.results
    allCharacters = [...allCharacters, ...newCharacters]
    offset += 50;
  }
  return allCharacters
}

export const fetchAlternateStats = async () => {
  const url = 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json'
  const altCharacterStats = await fetchInfo(url)
  return altCharacterStats
}
