import React from 'react'
import styles from './RonGbp.module.css'


const RonGbp = ({ changeValueRonGbp, changeValueGbpRon, clickDisableRonGbp, isDisabled, ronGbpValue, gbpRonValue, 
    ronBallance, gbpBallance, hideErrorNumbers, hideErrorBallance, roFlag, ukFlag, updateBallanceErrorRonGbp }) => {

    return (
        <div className={styles.RonGbp}>
            <div>
                <img src={roFlag} alt="Flag"></img>
                <span>Current ballance: {ronBallance.toFixed(2)}</span>
                <input type="number" disabled={isDisabled} value={ronGbpValue} onChange={changeValueRonGbp}></input> </div>
            <button id={styles.switch} onClick={clickDisableRonGbp}>↓↑</button>
            <div><img src={ukFlag} alt="Flag"></img>
                <span>Current ballance: {gbpBallance.toFixed(2)}</span>
                <input type="number" disabled={!isDisabled} value={gbpRonValue} onChange={changeValueGbpRon}></input> </div>
            <p style={hideErrorNumbers}>Please provide only numbers greater than 0!</p>
            <p style={hideErrorBallance}>Error! Check your ballance!</p>
            <button id={styles.convert} onClick={updateBallanceErrorRonGbp}>Convert</button>
        </div>
    )
}

export default RonGbp;