import { getKeyValue } from './storage.service.js'
import axios from 'axios'

export const getIcons = icon => {
  switch (icon.slice(0, 2)) {
    case '01':
      return '☀️'
    case '02':
      return '🌤️'
    case '03':
      return '☁️'
    case '04':
      return '☁️'
    case '09':
      return '🌧️'
    case '10':
      return '🌦️'
    case '11':
      return '⛈️'
    case '13':
      return '❄️'
    case '50':
      return '🌫️'
    default:
      return ''
  }
}
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


  return response.data
}