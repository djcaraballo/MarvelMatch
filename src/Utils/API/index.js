export const fetchInfo = async (url) => {
  const response = await fetch(url)
  if (response.status >= 300) {
    throw new Error('Fetch has failed')
  } else {
    const result = await response.json() 
    return result
  }
}

/////////////////////////////////////////////////////////////

// import md5 from 'md5'

// const privateKey = 'f1b690b8e89d7f112c6f33f956693b2f91d93400'
// const publicKey = 'a4d95911b60999871aaed8a8c43823f6'

// export const fetchInfo = async (url) => {
  // const timeStamp = Date.now().toString()
  // const hash = md5(`${timeStamp}${privateKey}${publicKey}`)
  // const url = `http://gateway.marvel.com/v1/public/characters?ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`

//   const response = await fetch(url)
//   if (response.status >= 300) {
//     throw new Error('Fetch has failed')
//   } else {
//     const result = await response.json() 
//     return result
//   }
// }
/////////////////////////////////////////////////////////////

// const privateKey = 'f1b690b8e89d7f112c6f33f956693b2f91d93400'
// const publicKey = 'a4d95911b60999871aaed8a8c43823f6'

// export const fetchInfo = () => {
//   let timestamp = Date.now().toString()
//   let hash = md5(`${timestamp}${privateKey}${publicKey}`);
//   let url = `http://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`

//   fetch(url)
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error.status))
// };