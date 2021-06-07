import React from 'react'
import styles from './AllAccounts.module.css'
import roFlag from '../../../images/ro.png'

const AllAccounts = ({amount, currencyAbv}) => {
    return (
        <div className={styles.AllAccounts}>
            <p>{amount} {currencyAbv}<img src={roFlag} alt="RO"></img></p>
            <span>Total balance in {currencyAbv}</span>
        </div>
    )
}

export default AllAccounts;