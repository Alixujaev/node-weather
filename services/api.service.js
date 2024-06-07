import { getKeyValue } from './storage.service.js'
import axios from 'axios'

export const getWeather = async(city) => {
  const token = process.env.TOKEN ?? await getKeyValue('token')

  const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
    params: {
      q: city,
      appid: token,
      lang: 'en',
      units: 'metric'
    }
  })

  console.log(response.data)

  return response.data
}