import { useState, useEffect } from 'react'
import countriesService from './services/countries'
import weatherService from './services/weather'
import CountryList from './components/CountryList'
import CountryDisplay from './components/CountryDisplay'

function App() {
  const [countryName, setCountryName] = useState('')
  const [countries, setCountries] = useState(null)
  const [country, setCountry] = useState(null)
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    countriesService.getAll().then(initialCountries => setCountries(initialCountries.map((c,i) => ({...c, id: i+1}))))
  }, [])
  
  useEffect(() => {
    //console.log(`running effect, country: ${countryName}`)

    if (countries && countries.some(c => c.name.common.toLowerCase() === countryName.toLowerCase())) {
      //console.log('found match')
      const newCountry = countries.find(c => c.name.common.toLowerCase() === countryName.toLowerCase())
      setCountry(newCountry)
      weatherService.getWeather(newCountry).then(returnedWeather => setWeather(returnedWeather))
    }
    else {
      setCountry(null)
      setWeather(null)
    }
  }, [countryName])

  if (!countries) {
    return (
      <h1>Loading...</h1>
    )
  }

  const handleCountry = (event) => {
    const newCountry = event.target.value
    setCountryName(newCountry)
    //console.log(newCountry);
  }

  const handleShowCountry = (id) => {
    const newCountry = countries.find(c => c.id === id)
    setCountry(newCountry)
    setCountryName(newCountry.name.common)
  }

  const countriesToShow = countries.filter(c => c.name.common.toLowerCase().includes(countryName.toLowerCase()))

  if (countryName.trim().length === 0) {
    return (
      <>
        <h1>Country Finder</h1>
        <input value={countryName} onChange={handleCountry}></input>
        <p>Please enter a country</p>
    </>
    )
  }

  if (country && weather) {
    return (
      <>
        <h1>Country Finder</h1>
        <input value={countryName} onChange={handleCountry}></input>
        <CountryDisplay country={country} weather={weather}/>
      </>
    )
  }

  return (
    <>
      <h1>Country Finder</h1>
      <input value={countryName} onChange={handleCountry}></input>
      <CountryList onClick={handleShowCountry} list={countriesToShow.length > 10 ? null : countriesToShow}/>
    </>
  )
}

export default App
