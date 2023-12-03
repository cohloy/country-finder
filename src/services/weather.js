const api_key = import.meta.env.VITE_WEATHER_KEY
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?'
import axios from 'axios'

const getWeather = (country) => {
    return axios
        .get(`${baseUrl}lat=${country.capitalInfo.latlng[0]}&lon=${country.capitalInfo.latlng[1]}&appid=${api_key}`)
        .then(response => response.data)
}

export default { getWeather }