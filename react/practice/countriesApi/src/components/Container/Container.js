import React, { useEffect, useState } from 'react'
import styles from './Container.module.css'
import Country from '../Country/Country'

const Container = () => {
    const [countries, setCountries] = useState([])
    const [inputValue, setInputValue] = useState("")
    const updateInputValue = (event) => {
        setInputValue(event.target.value)
    }

    useEffect(() => {
        fetch("https://restcountries.eu/rest/v2/all")
            .then(response => response.json())
            .then(response => setCountries(response))
    }, [])

    return (
        <div className={styles.container}>
            <input type="text" placeholder="Please enter a country..." value={inputValue} onChange={updateInputValue}></input>
            <div className={styles.mapContainer}>
                {countries.filter(country => {
                    return country.name.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                })
                .map((country, index) => {
                    return <Country key={index}
                        name={country.name}
                        population={country.population}
                        region={country.region}
                        capital={country.capital}
                        flag={country.flag} />
                })}
            </div>
        </div>
    )
}

export default Container;