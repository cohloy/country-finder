const CountryList = ({list, onClick}) => {
    if (list === null) {
        return (
            <div>
                <p>Too many matches, specify your search</p>
            </div>
        )
    }
    return (
        <div>
            {list.map(c => <p key={c.id}>{c.name.common} <button onClick={() => onClick(c.id)}>show</button></p>)}
        </div>
    )
}

export default CountryList