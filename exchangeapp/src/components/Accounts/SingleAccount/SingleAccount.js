import React from 'react'
import styles from './SingleAccount.module.css'


const SingleAccount = ({currency, amount, currencyAbv, flag}) => {
    return (
        <div className={styles.SingleAccount}>
            <p>{amount} {currencyAbv} 
            <img src={flag} alt="RO"></img>
            </p>
            <span>{currency}</span>
        </div>
    )
}

export default SingleAccount;