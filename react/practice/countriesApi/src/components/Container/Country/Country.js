import React from 'react'
import styles from './Country.module.css'

const Country = (props) => {
    return (
        <div className={styles.country}>
            <img src={props.flag} alt="Flag"></img>
            <h1>{props.name}</h1>
            <p><span>Population:</span> {props.population}</p>
            <p><span>Region:</span>{props.region}</p>
            <p><span> Capital: </span>{props.capital}</p>
        </div>
    )
}

export default Country;