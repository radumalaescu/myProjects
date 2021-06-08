import React from 'react'
import styles from './EurUsd.module.css'


const EurUsd = ({ changeValueEurUsd, changeValueUsdEur, clickDisableEurUsd, isDisabled, eurUsdValue, usdEurValue, 
    eurBallance, usdBallance, hideErrorNumbers, hideErrorBallance, euFlag, usFlag, updateBallanceErrorEurUsd }) => {

    return (
        <div className={styles.EurUsd}>
            <div>
                <img src={euFlag} alt="Flag"></img>
                <span>Current ballance: {eurBallance.toFixed(2)}</span>
                <input type="number" disabled={isDisabled} value={eurUsdValue} onChange={changeValueEurUsd}></input> </div>
            <button id={styles.switch} onClick={clickDisableEurUsd}>↓↑</button>
            <div><img src={usFlag} alt="Flag"></img>
                <span>Current ballance: {usdBallance.toFixed(2)}</span>
                <input type="number" disabled={!isDisabled} value={usdEurValue} onChange={changeValueUsdEur}></input> </div>
            <p style={hideErrorNumbers}>Please provide only numbers greater than 0!</p>
            <p style={hideErrorBallance}>Error! Check your ballance!</p>
            <button id={styles.convert} onClick={updateBallanceErrorEurUsd}>Convert</button>
        </div>
    )
}

export default EurUsd;