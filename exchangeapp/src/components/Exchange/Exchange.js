import React from 'react'
import styles from './Exchange.module.css'
import RonEur from './RonEur/RonEur'
import RonUsd from './RonUsd/RonUsd'
import roFlag from '../../images/ro.png'
import euFlag from '../../images/eu.png'
import usFlag from '../../images/us.png'

const Exchange = ({ updateBallanceErrorRonEur, updateBallanceErrorRonUsd, changeValueRonEur, changeValueEurRon, clickDisableRonEur,
    clickDisableRonUsd, isDisabled, ronEurValue, eurRonValue, ronBallance, eurBallance, usdBallance, hideErrorNumbers,
    hideErrorBallance, changeValueRonUsd, changeValueUsdRon, ronUsdValue, usdRonValue }) => {

    return (
        <div className={styles.Exchange}>
            <ul>
                <li>RON - EUR</li>
                <li>RON - USD</li>
                <li>RON - GBP</li>
                <li>EUR - USD</li>
                <li>EUR - GBP</li>
                <li>USD - GBP</li>
            </ul>
            <RonEur
                changeValueRonEur={changeValueRonEur}
                changeValueEurRon={changeValueEurRon}
                clickDisableRonEur={clickDisableRonEur}
                isDisabled={isDisabled}
                ronEurValue={ronEurValue}
                eurRonValue={eurRonValue}
                updateBallanceErrorRonEur={updateBallanceErrorRonEur}
                ronBallance={ronBallance}
                eurBallance={eurBallance}
                hideErrorNumbers={hideErrorNumbers}
                hideErrorBallance={hideErrorBallance}
                roFlag={roFlag}
                euFlag={euFlag} />
            <RonUsd
                changeValueRonUsd={changeValueRonUsd}
                changeValueUsdRon={changeValueUsdRon}
                clickDisableRonUsd={clickDisableRonUsd}
                isDisabled={isDisabled}
                ronUsdValue={ronUsdValue}
                usdRonValue={usdRonValue}
                updateBallanceErrorRonUsd={updateBallanceErrorRonUsd}
                ronBallance={ronBallance}
                usdBallance={usdBallance}
                hideErrorNumbers={hideErrorNumbers}
                hideErrorBallance={hideErrorBallance}
                roFlag={roFlag}
                usFlag={usFlag} />
        </div>
    )
}

export default Exchange;