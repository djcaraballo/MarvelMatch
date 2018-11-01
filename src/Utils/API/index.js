import { url } from './API-key';

export const fetchInfo = async () => {
  const response = await fetch(url)
  if (response.status >= 300) {
    throw new Error('Fetch has failed')
  } else {
    const result = await response.json() 
  }
  return result
  // console.log(url)
}