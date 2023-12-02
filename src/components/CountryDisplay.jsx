const CountryDisplay = ({country}) => {
    return (
        <div>
            <h2>{country.name.common}</h2>
            <p>Capital: {country.capital[0]}</p>
            <p>Languages:</p>
            <ul>
                {Object.values(country.languages).map((lang, index) => <li key={index+1}>{lang}</li>)}
            </ul>
            <img src={country.flags.png} alt={country.flags.alt}/>
        </div>
    )
}

export default CountryDisplay