import axios from 'axios'

const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api'

const getCountry = (name) => {
    return axios
        .get(`${baseUrl}/name/${name}`)
        .then(response => {
            console.log(response.data)
            return response.data
        })
}

const getAll = () => {
    return axios
        .get(`${baseUrl}/all`)
        .then(response => {
            console.log(response.data)
            return response.data
        })
}

export default { getCountry, getAll }