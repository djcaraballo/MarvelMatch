import md5 from 'md5'

const privateKey = 'f1b690b8e89d7f112c6f33f956693b2f91d93400'
const publicKey = 'a4d95911b60999871aaed8a8c43823f6'
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
