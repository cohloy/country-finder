const CountryDisplay = ({country, weather}) => {
    const iconUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
    return (
        <div>
            <h2>{country.name.common}</h2>
            <p>Capital: {country.capital[0]}</p>
            <p>Languages:</p>
            <ul>
                {Object.values(country.languages).map((lang, index) => <li key={index+1}>{lang}</li>)}
            </ul>
            <img src={country.flags.png} alt={country.flags.alt}/>
            <h2>Weather in {country.capital[0]}</h2>
            <p>Temperature: {Math.round(weather.main.temp-273)}° Celsius</p>
            <img src={iconUrl} alt={weather.weather.description}/>
            <p>Wind: {Math.round(weather.wind.speed * 100)/100.0} m/s</p>
        </div>
    )
}

export default CountryDisplay