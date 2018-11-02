export const fetchInfo = async (url) => {
    console.log(url)
  const response = await fetch(url)
  if (response.status >= 300) {
    throw new Error('Fetch has failed')
  } else {
    const result = await response.json() 
    return response
  }
}