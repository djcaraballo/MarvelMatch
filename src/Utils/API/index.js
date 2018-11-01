import { url } from 'API-key';

export fetchInfo = () => {
  const response = fetch(url)
  const result = response.json()
  return result
}